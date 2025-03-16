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
      sizeTooltips: ['Длина: ~50см']
    },
    {
      article: '004',
      name: 'Флаг 135х95',
      category: 'Snake Way Division',
      price: 1300,
      photo: ['flag1.jpg', 'flag2.jpg', 'flag3.jpg'],
      colorTooltips: ['тёмно-серый'],
      sizeTooltips: ['Размеры флага: 130х95см\nКарман для флагштока: Ø 35мм']
    },
    {
      article: '005',
      name: 'Кепка',
      category: 'Snake Way Division',
      price: 1900,
      colors: ['black-green', 'black-white', 'grey-green', 'grey-white', 'white-green', 'white-white'],
      colorTooltips: ['Черная+зеленый лого', 'Черная+белый лого', 'Серая+зеленый лого', 'Серая+белый лого', 'Белая+зеленый лого', 'Белая+белый лого'],
      photo: ['cap1.jpg', 'cap2.jpg', 'cap3.jpg', 'cap4.jpg'],
      sizeTooltips: ['универсальный']
    },
    {
      article: '006',
      name: 'Керамическая кружка',
      category: 'Snake Way Division',
      price: 500,
      photo: ['cup1.jpg', 'cup2.jpg', 'cup3.jpg'],
      colorTooltips: ['бело-зелёный']
    },
    {
      article: '007',
      name: 'Носки (2 ПАРЫ)',
      category: 'Snake Way Division',
      price: 700,
      sizes: ['38-42', '42-45'],
      colorTooltips: ['желтые и черные'],
      photo: ['socks1.jpg', 'socks2.jpg'],
    },
    {
      article: '008',
      name: 'Демисезонная шапка',
      category: 'Snake Way Division',
      price: 700,
      photo: ['hat1.jpg', 'hat2.jpg', 'hat3.jpg', 'hat4.jpg'],
      sizeTooltips: ['без отворота', 'с отворотом'],
      sizes: ['one', 'two'],
    },
  ];
</script>

<Shop {products} />

<style></style>
