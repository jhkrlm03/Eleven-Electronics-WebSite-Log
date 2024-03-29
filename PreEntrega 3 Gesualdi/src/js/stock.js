import * as className from "./class.js";

/**
 * The stock of products that we have
 */
export let stock = [
  new className.GraphicCard({
    category: "Graphic Cards",
    img: "../img/products/MSI mech rx 6700 xt.png",
    price: 252989.45,
    brand: "MSI",
    series: "MECH",
    name: "RX 6700 XT MECH 2X 12G 0C",
    pci: "PCI Express 4.0",
    chipsetManufacturer: "AMD",
    gpuSeries: "AMD Radeon RX6000 SERIES",
    gpu: "Radeon RX 6700 XT",
    coreClock: false,
    boostClock: 2620,
    cudaCores: false,
    streamProcessors: 2560,
    effectiveMc: 16,
    memorySize: 12,
    memoryInterface: 192,
    memoryType: "GDDR6",
    directX: "DirectX 12 Ultimate",
    openGL: "OpenGL 4.6",
    multiMonitor: 4,
    hdmi: "1 x HDMI 2.1",
    displayPort: "3 x DisplayPort 1.4",
    dvi: false,
    resolution: "7680 * 4320",
    sli: false,
    cooler: "Dual Fan",
    tdp: 230,
    psuRecWattage: 650,
    connector: "2 * 8-Pin",
    lowProfile: false,
    dimensions: [24.68, 13.11],
  }),

  new className.GraphicCard({
    category: "Graphic Cards",
    price: 199997.97,
    img: "../img/products/Asrock_RX_6600_CLD.png",
    brand: "Asrock",
    series: false,
    name: "RX 6600 CLD 8G",
    pci: "PCI Express 4.0",
    chipsetManufacturer: "AMD",
    gpuSeries: "AMD Radeon RX 6000 Series",
    gpu: "Radeon RX 6600",
    coreClock: "1625 Mhz",
    boostClock: "2491 Mhz",
    cudaCores: false,
    streamProcessors: "1792 Stream Processors",
    effectiveMc: 14,
    memorySize: 8,
    memoryInterface: 128,
    memoryType: "GDDR6",
    directX: "DirectX 12 Ultimate",
    openGL: "Open GL",
    multiMonitor: 4,
    hdmi: "1 x HDMI 2.1",
    displayPort: "3 x DisplayPort 1.4",
    dvi: false,
    resolution: "7680 x 4320",
    sli: false,
    cooler: "Dual Fan",
    tdp: 132,
    psuRecWattage: 500,
    connector: "8-Pin",
    lowProfile: false,
    dimensions: [26.9, 13.2],
  }),

  new className.GraphicCard({
    category: "Graphic Cards",
    price: 239999.99,
    img: "../img/products/MSI RX 6800 Gaming Z Trio.png",
    brand: "MSI",
    series: "Gaming",
    name: "RX 6800 Gaming Z Trio 16G",
    pci: "PCI Express 4.0",
    chipsetManufacturer: "AMD",
    gpuSeries: "AMD Radeon RX 6000 Series",
    gpu: "Radeon RX 6800",
    coreClock: 1925,
    boostClock: 2155,
    cudaCores: false,
    streamProcessors: 3840,
    effectiveMc: 16,
    memorySize: 16,
    memoryInterface: "256-Bit",
    memoryType: "GDDR6",
    directX: "DirectX 12 Ultimate",
    openGL: "OpenGL 4.6",
    multiMonitor: 4,
    hdmi: "2 x HDMI 2.1",
    displayPort: "3 x DisplayPort 1.4",
    dvi: false,
    resolution: "7680 x 4320",
    sli: false,
    cooler: "Triple Fan",
    tdp: 250,
    psuRecWattage: 650,
    connector: "2 x 8-Pin",
    lowProfile: false,
    dimensions: [32.41, 12],
  }),

  new className.GraphicCard({
    category: "Graphic Cards",
    price: 250300.67,
    img: "../img/products/MSI 3060 Ventus 2X.png",
    brand: "MSI",
    series: "Ventus",
    name: "RTX 3060 Ventus 2X 12G OC",
    pci: "PCI Express 4.0",
    chipsetManufacturer: "NVIDIA",
    gpuSeries: "NVIDIA GeForce RTX 30 Series",
    gpu: "GeForce RTX 3060",
    coreClock: false,
    boostClock: 1807,
    cudaCores: 3584,
    streamProcessors: false,
    effectiveMc: 15,
    memorySize: 12,
    memoryInterface: 192,
    memoryType: "GDDR6",
    directX: "DirectX 12 Ultimate",
    openGL: "OpenGL 4.6",
    multiMonitor: 4,
    hdmi: "1 x HDMI 2.1",
    displayPort: "3 x DisplayPort 1.4a",
    dvi: false,
    resolution: "7680 x 4320",
    sli: false,
    cooler: "Dual Fan",
    tdp: 170,
    psuRecWattage: 550,
    connector: "1 x 8-Pin",
    lowProfile: false,
    dimensions: [23.5, 12.4],
  }),

  new className.Processor({
    category: "Processors",
    price: 259800.67,
    img: "../img/products/I9 13900K.png",
    brand: "Intel",
    type: "Desktop",
    series: "Core i9 13th Gen",
    name: "Core i9-13900K",
    model: "BX8071513900K",
    socket: "LGA 1700",
    coreName: "Raptor Lake",
    cores: 24,
    threads: 32,
    opFrequency: [
      ["P Core", 3.0],
      ["E Core", 2.2],
    ],
    maxFrequency: 5.7,
    intelTurboBoostTech: [
      ["P Core", 5.4],
      ["E Core", 4.3],
    ],
    l1Cache: false,
    l2Cache: 32,
    l3Cache: 36,
    manufacturingTech: 7,
    sup64Bit: "Supported",
    hyperThreadingSp: "Supported",
    memType: "DDR4 3200 / DDR5 5600",
    memChannel: 2,
    maxMemSize: 128,
    eccMem: "Supported",
    integratedGraphics: "Intel UHD Graphics 770",
    pciExpressRevision: "5.0 / 4.0 / 3.0",
    tdp: 125,
    windows11: "Supported",
  }),

  new className.Processor({
    category: "Processors",
    price: 174999.99,
    img: "../img/products/i7 12700K.png",
    brand: "Intel",
    type: "Desktop",
    series: "Core i7 12th Gen",
    name: "Core i7-12700k",
    model: "BX8071512700K",
    socket: "LGA 1700",
    coreName: "Alder Lake",
    cores: 12,
    threads: 20,
    opFrequency: [
      ["P Core", 3.6],
      ["E Core", 2.7],
    ],
    maxFrequency: 5.0,
    intelTurboBoostTech: [
      ["P Core", 4.9],
      ["E Core", 3.8],
    ],
    l1Cache: false,
    l2Cache: 12,
    l3Cache: 25,
    manufacturingTech: 7,
    sup64Bit: "Supported",
    hyperThreadingSp: "Supported",
    memType: "DDR4 3200, DDR5 4800",
    memChannel: 2,
    maxMemSize: 128,
    eccMem: "Supported",
    integratedGraphics: "Intel UHD Graphics 770",
    pciExpressRevision: "5.0 / 4.0 / 3.0",
    tdp: 125,
    windows11: "Supported",
  }),

  new className.RapidAccessMemory({
    category: "RAM Memories",
    price: 14000.67,
    img: "../img/products/Ripjaws V.png",
    brand: "G.SKILL",
    series: "Ripjaws V Series ",
    name: "Ripjaws V 16-Gb DDR4",
    model: "F4-3200C16D-16GVKB",
    capacity: 16,
    ddr: "DDR4",
    type: "288-Pin PC RAM",
    speed: 3200,
    casLatency: 16,
    timing: "16-18-18-38",
    voltage: 1.35,
    ecc: "NO",
    bufferedRegistered: "Unbuffered",
    chipset: "Intel XMP 2.0",
    color: "Negro",
    heatSpreader: "contains",
  }),

  new className.RapidAccessMemory({
    category: "RAM Memory",
    price: 15891.8,
    img: "../img/products/Trident Z Neo.png",
    brand: "G.Skill",
    series: "Trident Z5 Neo RGB Series",
    name: "Trident Z5 Neo RGB  16-Gb DDR5",
    model: "F5-6000J3038F16GX2-TZ5NR",
    capacity: 16,
    ddr: "DDR5",
    type: "288-Pin PC RAM",
    speed: 6000,
    casLatency: 30,
    timing: "30-38-38-96",
    voltage: 1.35,
    ecc: "NO",
    bufferedRegistered: "Unbuffered / Unregistered",
    chipset: "AMD EXPO",
    color: "Negro",
    heatSpreader: "contains",
  }),

  new className.RapidAccessMemory({
    category: "RAM Memories",
    price: 20000.55,
    img: "../img/products/OWL rgb.png",
    brand: "OLOy",
    series: "OWL Series",
    name: "OWL rgb 32gb DDR4",
    model: "MD4U323216DJDA",
    capacity: 32,
    ddr: "DDR4",
    type: "288-Pin PC RAM",
    speed: 3200,
    casLatency: 16,
    timing: "16-20-20-38",
    voltage: 1.35,
    ecc: "NO",
    bufferedRegistered: "Unbuffered",
    chipset: "AMD EXPO",
    color: "Owl Black",
    heatSpreader: "contains",
  }),

  new className.ComputerCases({
    category: "Desktop Cases",
    price: 41999.43,
    img: "../img/products/Cullinan PX rgb-st.png",
    brand: "Rosewill",
    series: "011 Dynamic",
    name: "CULLINAN PX RGB-ST ATX Mid-Tower",
    series: "CULLINAN PX",
    maxFormat: "E-ATX",
    cooler: [
      ["Option 1", 240],
      ["Option 2", 280],
    ],
    led: ["RGB", "contains", "amount", 4],
    temperedGlass: "contains",
  }),

  new className.ComputerCases({
    category: "Desktop Cases",
    price: 50000.39,
    img: "../img/products/LIAN LI 011 DYNAMIC EVO.png",
    brand: "LIAN LI",
    series: "011 Dynamic",
    name: "O11 Dynamic EVO O11DEX",
    maxFormat: "E-ATX",
    cooler: [
      ["Option 1", 280],
      ["Option 2", 360],
    ],
    led: ["RGB", "contains", ["amount", 5]],
    temperedGlass: "contains",
  }),
];
