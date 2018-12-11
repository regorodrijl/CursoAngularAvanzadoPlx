import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  styles: []
})
export class ContactsNewComponent implements OnInit, OnChanges {
  @Input() public item = {
    _id: null,
    name: '',
    birthDate: null,
    email: '',
    phone: ''
  };
  @Output() public save = new EventEmitter<any>();
  public form: FormGroup;

  constructor(protected fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      _id: this.item._id,
      name: [this.item.name, Validators.required],
      birthDate: [
        this.formatBirthDate(this.item.birthDate),
        [this.ValidBirthDate]
      ],
      email: this.item.email,
      phone: [
        this.item.phone,
        [Validators.minLength(6), Validators.maxLength(12)]
      ]
    });
  }

  public ngOnChanges(change) {
    this.patchValue();
  }

  public onSaveClick() {
    const newContact = { ...this.form.value };
    newContact.birthDate = this.parseBirthDate(newContact.birthDate);
    this.save.next(newContact);
    this.form.reset();
  }

  private patchValue() {
    if (this.form && this.item) {
      const item = {
        ...this.item,
        birthDate: this.formatBirthDate(this.item.birthDate)
      };
      this.form.patchValue(item);
    }
  }

  private ValidBirthDate(control: AbstractControl) {
    const birthDate = Date.parse(control.value);
    if (birthDate && !isNaN(birthDate)) {
      const today = new Date().getTime();
      const age = (today - birthDate) / (1000 * 60 * 60 * 24 * 365);
      if (age >= 18 && age <= 100) {
        return null;
      }
    }
    return {
      birthDate: 'Date of birth invalid'
    };
  }
  private formatBirthDate(value) {
    const birthDate = new Date(value);
    if (birthDate instanceof Date && !isNaN(birthDate.getDate())) {
      return (
        birthDate.getDate() +
        '-' +
        (birthDate.getMonth() + 1) +
        '-' +
        birthDate.getFullYear()
      );
    } else {
      return '';
    }
  }
  private parseBirthDate(birthDate: string) {
    if (birthDate) {
      return Date.parse(birthDate);
    } else {
      return null;
    }
  }
}
