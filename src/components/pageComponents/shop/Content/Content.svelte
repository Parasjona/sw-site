<script>
  import { Shop } from '@components/organisms/Shop';

  const products = [
    {
      article: '001',
      name: 'Стикерпак',
      category: 'Snake Way Division',
      price: 250,
      photo: ['stickerpack1.jpg', 'stickerpack2.jpg', 'stickerpack3.jpg']
    },
    {
      article: '002',
      name: 'Брелок-ремувка',
      category: 'Snake Way Division',
      price: 400,
      photo: ['keychain1.jpg', 'keychain2.jpg', 'keychain3.jpg']
    },
    {
      article: '003',
      name: 'Ланьярд',
      category: 'Snake Way Division',
      price: 400,
      photo: ['lanyard1.jpg', 'lanyard2.jpg', 'lanyard3.jpg'],
      sizeNames: ['Длина: ~50см']
    },
    {
      article: '004',
      name: 'Флаг 135х95',
      category: 'Snake Way Division',
      price: 1300,
      photo: ['flag1.jpg', 'flag2.jpg', 'flag3.jpg'],
      colorNames: ['тёмно-серый'],
      sizeNames: ['Размеры флага: 130х95см\nКарман для флагштока: Ø 35мм']
    },
    {
      article: '005',
      name: 'Кепка',
      category: 'Snake Way Division',
      price: 1900,
      colors: [
        'black-green',
        'black-white',
        'grey-green',
        'grey-white',
        'white-green',
        'white-white'
      ],
      colorNames: [
        'Черная с зеленым лого',
        'Черная с белым лого',
        'Серая с зеленым лого',
        'Серая с белым лого',
        'Белая с зеленым лого',
        'Белая с белым лого'
      ],
      photo: ['cap1.jpg', 'cap2.jpg', 'cap3.jpg', 'cap4.jpg'],
      sizeNames: ['универсальный']
    },
    {
      article: '006',
      name: 'Керамическая кружка',
      category: 'Snake Way Division',
      price: 500,
      photo: ['cup1.jpg', 'cup2.jpg', 'cup3.jpg'],
      colorNames: ['бело-зелёный']
    },
    {
      article: '007',
      name: 'Носки (2 ПАРЫ)',
      category: 'Snake Way Division',
      price: 700,
      sizes: ['38-42', '42-45'],
      colorNames: ['желтые и черные'],
      photo: ['socks1.jpg', 'socks2.jpg']
    },
    {
      article: '008',
      name: 'Демисезонная шапка',
      category: 'Snake Way Division',
      price: Будут позже,
      photo: ['hat1.jpg', 'hat2.jpg', 'hat3.jpg', 'hat4.jpg'],
      sizeNames: ['без отворота', 'с отворотом'],
      sizes: ['one', 'two']
    },
    {
      article: '009',
      name: 'Черная футболка',
      category: 'Snake Way Division',
      price: 3100,
      photo: ['shirt1.jpg', 'shirt2.jpg', 'shirt3.jpg'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      article: '010',
      name: 'Белая футболка',
      category: 'Snake Way Division',
      price: 2600,
      photo: ['shirtw1.jpg', 'shirtw2.jpg', 'shirtw3.jpg'],
      sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
      article: '011',
      name: 'Бандана',
      category: 'Snake Way Division',
      price: 800,
      photo: ['bandana1.jpg', 'bandana2.jpg', 'bandana3.jpg','bandana4.jpg','bandana5.jpg',],
      sizeNames: ['черный', 'белый', 'красный', 'зеленый', 'желтый'],
      sizes: ['bl', 'wt', 'rd', 'gr', 'ye']
    }
  ];
</script>

<Shop {products} />

<style></style>
