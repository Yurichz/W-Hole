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
      Tags: [
        'GPU',
        'NVIDIA'
      ]
    }
  },
];

export default ShopItemsData;
