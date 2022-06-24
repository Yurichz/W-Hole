import IntelI7 from '../../assets/I7-9700k.svg';
import GTX1660 from '../../assets/GTX1660.svg';
import RazerMamba from '../../assets/Razer-Mamba.svg';
import HyperXCLoud from '../../assets/HyperX-Cloud.svg';
import AOC24G2BK01 from '../../assets/AOC 24G2BK01.jpg';
import QUBEOverlord from '../../assets/QUBE Overlord C27Q165Plus.jpg';
import SamsungF24T350FHI from '../../assets/Samsung F24T350FHI Dark Gray.jpg';
import SamsungOdysseyG5 from '../../assets/Samsung Odyssey G5.jpg';
import AMDRyzen55600X from '../../assets/AMD Ryzen 5 5600X.jpg';
import KingstonFury16GB from '../../assets/Kingston Fury DDR4 16GB.jpg';
import AMDRadeonRX6600 from '../../assets/MSI AMD Radeon RX 6600.jpg';
import RTX3060Ti from '../../assets/MSI GeForce RTX3060Ti.jpg';

const ShopItemsData = [
  {
    Name: 'Intel I7-9700k',
    Price: 359.99,
    Image: IntelI7,
    Details: {
      Id: 1,
      Alt: 'Intel I7-9700k',
      Purchase: 1397,
      Characteristics: [
        ['Тип сокету', 's1151'],
        ['Кількість ядер', '8 ядер'],
        ['Кількість потоків', '8 потоків'],
        ['Базова тактова частота', '3.6 GHz'],
        ['Максимальна тактова частота', '4.9 GHZ'],
        ['TDP', '95W'],
        ["Кеш-пам'ять", '12MB']
      ],
      Tags: [
        'CPU',
        'INTEL'
      ]
    }
  },
  {
    Name: 'MSI GTX 1660',
    Price: 429.99,
    Image: GTX1660,
    Details: {
      Id: 2,
      Alt: 'MSI GTX 1660',
      Purchase: 1041,
      Characteristics: [
        ["Тип пам'яті", 'GDDR6'],
        ["Об'єм вбудованої пам'яті", '6 ГБ'],
        ['Частота ядра (Boost)', '1815 MHz'],
        ["Частота пам'яті", '14000 MHz'],
        ['Максимальна споживана потужність', '125 Вт'],
        ["Розрядність шини пам'яті", '192 Bit'],
        ['Версія DirectX', '12']
      ],
      Tags: [
        'GPU',
        'NVIDIA'
      ]
    }
  },
  {
    Name: 'Razer Mamba',
    Price: 135.99,
    Image: RazerMamba,
    Details: {
      Id: 3,
      Alt: 'Razer Mamba',
      Purchase: 1243,
      Characteristics: [
        ['Роздільна здатність (max)', '16000 dpi'],
        ['Тип датчика', 'оптичний'],
        ['Інтерфейс підключення', 'USB'],
        ['Довжина кабеля', '2.1 м'],
        ['Кількість кнопок', '9']
      ],
      Tags: [
        'MOUSE',
        'RAZER'
      ]
    }
  },
  {
    Name: 'HyperX Cloud',
    Price: 119.99,
    Image: HyperXCLoud,
    Details: {
      Id: 4,
      Alt: 'HyperX Cloud',
      Purchase: 894,
      Characteristics: [
        ['Максимальна відтворена частота', '25 кГц'],
        ['Мінімальна відтворювана частота', '15 Гц'],
        ['Чутливість', '98 дБ'],
        ['Чутливість мікрофона', '39 дБ'],
        ['Мінімальна сприймана частота мікрофона', '50 Гц'],
        ['Максимальна сприймана частота мікрофона', '18 кГц']
      ],
      Tags: [
        'HEADPHONES',
        'HYPERX'
      ]
    }
  },
  {
    Name: 'Samsung Dark Gray',
    Price: 169.99,
    Image: SamsungF24T350FHI,
    Details: {
      Id: 5,
      Alt: 'Samsung F24T350FHI Dark Gray',
      Purchase: 1693,
      Characteristics: [
        ['Максимальна роздільна здатність дисплея', '1920x1080 (FullHD)'],
        ['Час реакції матриці', '5 мс'],
        ['Частота оновлення', '75 Гц'],
        ['Тип матриці', 'IPS'],
        ['Кут огляду', '178°'],
        ['Контрастність дисплея', '1 000 000:1'],
        ['Діагональ дисплея', '21.5']
      ],
      Tags: [
        'MONITOR',
        'SAMSUNG'
      ]
    }
  },
  {
    Name: 'AOC 24G2',
    Price: 239.99,
    Image: AOC24G2BK01,
    Details: {
      Id: 6,
      Alt: 'AOC 24G2',
      Purchase: 1967,
      Characteristics: [
        ['Максимальна роздільна здатність дисплея', '1920x1080 (FullHD)'],
        ['Час реакції матриці', '1 мс (MPRT)'],
        ['Частота оновлення', '144 Гц'],
        ['Тип матриці', 'IPS'],
        ['Кут огляду', '178°'],
        ['Контрастність дисплея', '1 000 000:1'],
        ['Діагональ дисплея', '23.8']
      ],
      Tags: [
        'MONITOR',
        'AOC'
      ]
    }
  },
  {
    Name: 'Samsung Odyssey G5',
    Price: 335.99,
    Image: SamsungOdysseyG5,
    Details: {
      Id: 7,
      Alt: 'Samsung Odyssey G5',
      Purchase: 500,
      Characteristics: [
        ['Максимальна роздільна здатність дисплея', '2560x1440 (2K QHD)'],
        ['Час реакції матриці', '1 мс (GtG)'],
        ['Частота оновлення', '144 Гц'],
        ['Тип матриці', 'VA'],
        ['Кут огляду', '178°'],
        ['Контрастність дисплея', '2500:1'],
        ['Діагональ дисплея', '27']
      ],
      Tags: [
        'MONITOR',
        'SAMSUNG'
      ]
    }
  },
  {
    Name: 'QUBE Overlord',
    Price: 279.99,
    Image: QUBEOverlord,
    Details: {
      Id: 8,
      Alt: 'QUBE Overlord',
      Purchase: 525,
      Characteristics: [
        ['Максимальна роздільна здатність дисплея', '2560x1440 (2K QHD)'],
        ['Час реакції матриці', '4 мс'],
        ['Частота оновлення', '165 Гц'],
        ['Тип матриці', 'VA'],
        ['Кут огляду', '178°'],
        ['Контрастність дисплея', '3000:1'],
        ['Діагональ дисплея', '27']
      ],
      Tags: [
        'MONITOR',
        'QUBE'
      ]
    }
  },
  {
    Name: 'AMD Ryzen 5 5600X',
    Price: 264.99,
    Image: AMDRyzen55600X,
    Details: {
      Id: 9,
      Alt: 'AMD Ryzen 5 5600X',
      Purchase: 1902,
      Characteristics: [
        ['Тип сокету', 'AM4'],
        ['Кількість ядер', '6 ядер'],
        ['Кількість потоків', '12 потоків'],
        ['Базова тактова частота', '3.7 GHZ'],
        ['Максимальна тактова частота', '4.6 GHZ'],
        ['TDP', '65W'],
        ["Об'єм кеш-пам'яті 1-го рівня", '3MB'],
        ["Об'єм кеш-пам'яті 3-го рівня", '32MB'],
      ],
      Tags: [
        'CPU',
        'AMD'
      ]
    }
  },
  {
    Name: 'AMD Radeon RX 6600',
    Price: 610.99,
    Image: AMDRadeonRX6600,
    Details: {
      Id: 10,
      Alt: 'AMD Radeon RX 6600',
      Purchase: 1158,
      Characteristics: [
        ["Тип пам'яті", 'GDDR6'],
        ["Об'єм вбудованої пам'яті", '8 ГБ'],
        ['Частота ядра (Boost)', '2491 MHz'],
        ["Частота пам'яті", '14000 MHz'],
        ['Максимальна споживана потужність', '125 Вт'],
        ["Розрядність шини пам'яті", '192 Bit'],
        ['Версія DirectX', '12']
      ],
      Tags: [
        'GPU',
        'AMD'
      ]
    }
  },
  {
    Name: 'Kingston Fury 16GB',
    Price: 109.99,
    Image: KingstonFury16GB,
    Details: {
      Id: 11,
      Alt: 'Kingston Fury 16GB',
      Purchase: 1728,
      Characteristics: [
        ["Тип пам'яті", 'DDR4'],
        ["Об'єм пам'яті", '16 ГБ'],
        ['Кількість модулів у наборі', '2'],
        ["Частота пам'яті", '3200 МГц']
      ],
      Tags: [
        'RAM',
        'KINGSTON'
      ]
    }
  },
  {
    Name: 'MSI RTX3060Ti 8Gb',
    Price: 1049.99,
    Image: RTX3060Ti,
    Details: {
      Id: 12,
      Alt: 'MSI RTX3060Ti 8Gb',
      Purchase: 1405,
      Characteristics: [
        ["Тип пам'яті", 'GDDR6'],
        ["Об'єм вбудованої пам'яті", '8 ГБ'],
        ['Частота ядра (Boost)', '1845 MHz'],
        ["Частота пам'яті", '14000 MHz'],
        ['Максимальна споживана потужність', '240 Вт'],
        ["Розрядність шини пам'яті", '256 Bit'],
        ['Версія DirectX', '12']
      ],
      Tags: [
        'GPU',
        'NVIDIA'
      ]
    }
  },
];

export default ShopItemsData;
