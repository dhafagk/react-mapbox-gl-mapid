# Delivery Tugas Rekrutmen React Front End Developer MAPID

![Logo](https://mapid.co.id/img/mapid_logo_warna-min.png)

Tugas ini adalah sebagai syarat seleksi pertama untuk proses rekrutmen React Front End Developer MAPID.

## Struktur Folder

```bash
├── public
├── src
│   ├── components			# Components folder
│       ├── Map					# Map Component
│           └── index.jsx
│       ├── ui					# UI Component such as Button
│			├── index.jsx
│			├── SortButton.jsx			# Button sortir
│			├── ToggleSortButton.jsx	# Button toggle sortir
│           └── ToggleThemeButton.jsx	# Button toggle darkmode
│		├── index.jsx
│		├── Layer.jsx			# Component titik
│		├── Popup.jsx			# Component popup
│       └── Menu.jsx			# Component menu
│   ├── configs				# Redux state, reducer, store, etc.
│		├── index.jsx
│		├── DataApi.js			# Kumpulan data Api
│		├── TokenStorage.js		# Data Token (token sendiri)
│		├── Theme.js			# Theme State (Persist)
│		└── Store.js			# Kumpulan data Reducer
│   ├── lib					# Library
│		└── withRouter.js		# useNavigate hook
│   ├── App.js
│   ├── index.css
│   └── index.js
├── node_modules
└── ...
```

## Setup

Clone projek ini

```bash
git clone https://github.com/dhafagk/react-mapbox-gl-mapid.git
```

Masuk ke directory projek

```bash
cd react-mapbox-gl-mapid
```

Instal package

```bash
yarn install
```

jalankan react

```bash
yarn start
```

### Package

- [Mapbox](https://www.mapbox.com/)
- [react-map-gl](https://urbica.github.io/react-map-gl/#/Introduction)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux.js.org/)
- [redux-persist](https://www.npmjs.com/package/redux-persist)
- [react-helmet](https://www.npmjs.com/package/react-helmet)
- [axios](https://axios-http.com/docs/intro)
- [tailwind](https://tailwindcss.com/)
- [heroicons](https://heroicons.com/)

## Fitur

#### Basic

1.  Merubah seluruh kode dari Stateless Component (Function Component) menjadi Stateful Component (Class Component).
2.  Fix error popup di Stateful Component

#### Tambahan

1.  NavigationControl untuk memudahkan dalam interaksi map dan GeolocateControl untuk mengarahkan titip map pada komputer kita.
2.  Menyimpan state darkmode ke localStorage menggunakan redux-persist.
