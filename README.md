# Delivery Tugas Rekrutmen React Front End Developer MAPID

![Logo](https://mapid.co.id/img/mapid_logo_warna-min.png)

Tugas ini adalah sebagai syarat seleksi pertama untuk proses rekrutmen React Front End Developer MAPID.

## Struktur Folder

- Buatlah react baru, pindahkan code yang diberikan berisi Stateless Components (Function Components) menjadi Statefull Components (Class Components) pada ReactJS. Beserta fitur-fiturnya.
- Terdapat Error pada Popup di Stateless Components, Selesaikkan Error itu di Statefull Components. Contoh seperti gambar disamping.
- Nilai tambahan :
  - Menambahkan fitur diluar task.
  - Modifies styling (dibolehkan memakai library lain).
  - Clear code.

## Clone

Clone projek ini

```bash
  git clone https://github.com/movinoary/Tugas-Rekrutmen-Mapid.git
```

Masuk ke directory projek

```bash
  cd Tugas-Rekrutmen-Mapid
```

Instal package

```bash
  npm install
```

jalankan react

```bash
  npm run dev
```

### Package Wajib

- [Mapbox](https://www.mapbox.com/)
- [react-map-gl](https://urbica.github.io/react-map-gl/#/Introduction)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux.js.org/)

## API DAN DATA

#### Endpoint get methode API

```http
  https://geoserver.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc
```

| Parameter  | Description                                |
| :--------- | :----------------------------------------- |
| `type`     | FeatureCollection                          |
| `features` | Array geometri titik dengan format geojson |

Respon data dari API tersebut adalah JSON dengan beberapa atribut yang perlu diperhatikan. Pada atribut level pertama kamu hanya perlu memperhatikan atribut dengan key “geojson”.

| Parameter    | Description                                    |
| :----------- | :--------------------------------------------- |
| `type`       | FeatureCollection                              |
| `geometry`   | coordinates: [longitude,latitude]              |
| `properties` | { Nama: “Satu”, Status: “Kuning”, Angka: “10”} |

## Pengiriman Tugas

Buatlah repositori github (atau platform repositori lainnya) berisi hasil tugas kemudian balas email ini dengan link repositori tersebut.

### Jelaskan pada file readme

👉 Struktur file/folder hasil pengerjaan

👉 Cara penginstalan library, dan menjalanan aplikasi

👉 Fitur-fitur dasar sesuai rekrutmen, dan Fitur-fitur tambahan di luar rekrutmen (jika ada).

## Struktur folder

👉 components

- layer ➡️ Components Titik
- menu ➡️ Components Menu
- popup ➡️ Components Popup (error)

👉 configs

- DataApi ➡️ Kumpulan Data API
- Store ➡️ Kumpulan Data Reducer
- TokenStorage ➡️ Data Token (token diutamakan membuat sendiri)

👉 scss ➡️ folder menyimpan styling
