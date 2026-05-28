# SOM BTA Statik Demo Arayüzü

Bu klasör, SOM Savunma Sanayi ve Havacılık A.Ş. için hazırlanmış statik biyometrik tanıma demo arayüzünü içerir.

## Çalıştırma

`index.html` dosyasını tarayıcıda açmanız yeterlidir. Database, backend veya API bağlantısı yoktur.

## Klasör Yapısı

```txt
index.html
assets/
  som-logo.png
  faces/
    01.png
    02.png
    ...
    50.png
```

## Kullanıcı Bilgileri

### Root / Sistem Kullanıcısı

```txt
Kullanıcı adı: root
Şifre: 155155
Rol: SOM sistem yöneticisi
```

Root kullanıcısı:
- Tüm menüleri görür.
- Kurum yetkilisi yetkilendirme ekranını görür.
- Yüzbaşıya kategori yetkileri verebilir veya kaldırabilir.
- Yeni kişi ekleme ve entegrasyon menülerini görür.
- Bazı menüler sadece demo görünümüdür, işlem yapmaz.

### Yüzbaşı / Kurum Yetkilisi

```txt
T.C. Kimlik No: 78093713244
Şifre: 155155
Ad Soyad: Piyade Yüzbaşı Mete Yarar
```

Yüzbaşı:
- Root tarafından yetki verilirse kategori araması yapabilir.
- Personele yetki verme ekranından Uzman Çavuş'a kategori yetkisi verebilir veya kaldırabilir.

### Uzman Çavuş / Saha Personeli

```txt
T.C. Kimlik No: 47870081128
Şifre: 155155
Ad Soyad: Uzman Çavuş Ali Doğan Bilir
```

Uzman Çavuş:
- Başlangıçta sadece Kategori 3 / Genel Arama yetkisine sahiptir.
- Yüzbaşı yetki verirse Kategori 1 ve Kategori 2 aramalarını da yapabilir.

## Yetki Akışı

Önerilen sunum akışı:

1. `root / 155155` ile giriş yapın.
2. Sol menüden `Kurum Yetkilisi Yetkilendir` ekranına girin.
3. Yüzbaşıya Kategori 1, 2 ve 3 yetkilerini verin.
4. Çıkış yapın.
5. `78093713244 / 155155` ile yüzbaşı olarak giriş yapın.
6. `Personele Yetki Ver` menüsünden Uzman Çavuş'a yetki verin.
7. Çıkış yapın.
8. `47870081128 / 155155` ile uzman çavuş olarak giriş yapın.
9. Detaylı yüz arama ekranında kategori yetki kontrolünü ve eşleşme simülasyonunu gösterin.

## Fotoğraf / Asset Değiştirme

Arama sırasında görünen yüz görselleri şu klasördedir:

```txt
assets/faces/
```

Şu an demo amaçlı sentetik PNG portreler kullanılmıştır.

Gerçek fotoğraf kullanmak isterseniz:
- `assets/faces/01.png`, `02.png` gibi dosyaları kendi `.jpg` veya `.png` dosyalarınızla değiştirebilirsiniz.
- Dosya uzantısını değiştirirseniz `index.html` içindeki `faceImg()` fonksiyonunda `.png` kısmını `.jpg` yapmanız gerekir.
- Örneğin tüm görselleri JPG yapacaksanız:

```js
const file = String(n).padStart(2,"0") + ".jpg";
```

Eşleşme simülasyonunda sistem 50. görselde durur. Bu nedenle sunumda eşleşecek kişiyi değiştirmek isterseniz özellikle şu dosyayı değiştirin:

```txt
assets/faces/50.png
```

## Not

Bu sistem gerçek yüz tanıma yapmaz. Tüm veriler statiktir ve sunum/demo amacıyla hazırlanmıştır.


## Bu Versiyondaki Görseller

Bu pakette `assets/faces/` altında 50 adet PNG portre vardır. Bunlar demo için üretilmiş sentetik görsellerdir. Sunumda farklı yüzler görünmesi için doğrudan kullanılabilir.

Arama simülasyonu yine 50. görselde durur:

```txt
assets/faces/50.png
```


## Güncelleme

Sistem artık yüklenen dosya adına göre eşleşme yapar.

Örnek:

```txt
21.jpg  ->  21 numaralı kayıt bulunur
34.png  ->  34 numaralı kayıt bulunur
50.jpeg ->  50 numaralı kayıt bulunur
```

Sunum sırasında sadece dosya adını değiştirmeniz yeterlidir.


## v6 Güncellemesi

- Sol menü üstündeki `SOM BTA / Kurumsal Demo Paneli` yazısı kaldırıldı.
- Genel bakış ekranındaki `Operasyon Akışı` yerine Türkiye operasyon haritası eklendi.
- Uzman Çavuş kullanıcısından `İşlem Geçmişi` menüsü kaldırıldı.


## v7 Güncellemesi

- Türkiye haritası daha gerçekçi ve tanınabilir vektör silüet ile değiştirildi.
- İstanbul, Ankara, İzmir, Adana, Diyarbakır ve Van markerları eklendi.
- Harita üzerinde pulse/radar efekti korundu.

## v8 Düzeltmesi

- Sol menüdeki `SOM BTA / Kurumsal Demo Paneli` yazısı HTML seviyesinde tamamen kaldırıldı.
- Logo alanı sadece SOM logosu olacak şekilde düzeltildi.
- Türkiye haritası yeniden çizildi; önceki taktik polygon görünümünden daha tanınabilir bir Türkiye silüeti yapıldı.

## v9 Güncellemesi

- Arama ekranındaki küçük fotoğraf grid görünümü kaldırıldı.
- `Detaylı Arama Başlat` butonuna basınca fotoğraflar tek tek büyük şekilde taranıyor gibi gösterilir.
- Eşleşme bulunduğunda bulunan fotoğraf sağ panelde büyük gösterilir ve altında kişi bilgileri oluşturulur.
- Eşleşme, yüklenen dosyanın adındaki numaraya göre yapılmaya devam eder.
