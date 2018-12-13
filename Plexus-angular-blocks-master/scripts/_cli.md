ng new angular-blocks --routing -s -S
ng g m about --routing true
ng g c about/about-container
ng g c about/about-container/about-info
ng g c about/about-container/about-links
ng g m home --routing true
ng g c home/home-container
ng g c home/home-container/home-dashboard
ng g m core
ng g c core/shell-container --export
ng g c core/shell-container/shell-header
ng g c core/shell-container/shell-footer
ng g c core/shell-container/shell-main
ng g c core/shell-container/shell-messenger
ng g s core/items-api
ng g m shared
npm install mini.css --save
ng g m base/items --routing=true
ng g c base/items/items-container
ng g c base/items/items-container/items-new
ng g c base/items/items-container/items-list
ng g m base/items/item --routing true
ng g c base/items/item/item-container
ng g c base/items/item/item-container/item-view
ng g m tutorial/8-reactive/contacts --routing=true
ng g c tutorial/8-reactive/contacts/contacts-container
ng g c tutorial/8-reactive/contacts/contacts-container/contacts-new
ng g c tutorial/8-reactive/contacts/contacts-container/contacts-list
ng g m tutorial/9-change/counter --routing=true
ng g c tutorial/9-change/counter/change-container
ng g m tutorial/a-redux/redux-rxjs --routing=true
ng g c tutorial/a-redux/redux-rxjs/counter
ng g c tutorial/a-redux/redux-rxjs/recounter
ng g m tutorial/a-redux/redux-rxjs/redux-ngrx --routing=true
ng g c tutorial/a-redux/redux-ngrx/redux-ngrx/items-container
ng add @angular/pwa
npm install -g ngx-pwa-icons
ngx-pwa-icons
ng g m tutorial/b-pwa/local --routing=true
ng g c tutorial/b-pwa/local/pwa-container
ng g m tutorial/c-universal/commerce --routing true
ng g c tutorial/c-universal/commerce/commerce-container
ng g m tutorial/d-i18n/stocks --routing=true
ng g c tutorial/d-i18n/stocks/stocks-container
ng g m tutorial/e-library/mathslab --routing=true
ng g c tutorial/e-library/mathslab/mathslab-container
