import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create default currencies
  const currencies = await Promise.all([
    prisma.currency.upsert({
      where: { code: 'USD' },
      update: {},
      create: {
        code: 'USD',
        name: 'US Dollar',
        symbol: '$',
        exchangeRate: 1,
        isActive: true,
        isDefault: false
      }
    }),
    prisma.currency.upsert({
      where: { code: 'DZD' },
      update: {},
      create: {
        code: 'DZD',
        name: 'Algerian Dinar',
        symbol: 'دج',
        exchangeRate: 135.5,
        isActive: true,
        isDefault: true
      }
    }),
    prisma.currency.upsert({
      where: { code: 'EUR' },
      update: {},
      create: {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
        exchangeRate: 0.92,
        isActive: true,
        isDefault: false
      }
    }),
    prisma.currency.upsert({
      where: { code: 'CNY' },
      update: {},
      create: {
        code: 'CNY',
        name: 'Chinese Yuan',
        symbol: '¥',
        exchangeRate: 7.2,
        isActive: true,
        isDefault: false
      }
    })
  ])

  console.log('✅ Created currencies:', currencies.map(c => c.code))

  // Create default colors
  const colors = await Promise.all([
    prisma.colorOption.upsert({
      where: { name: 'أبيض' },
      update: {},
      create: {
        name: 'أبيض',
        hexCode: '#FFFFFF',
        rgbCode: 'rgb(255, 255, 255)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أسود' },
      update: {},
      create: {
        name: 'أسود',
        hexCode: '#000000',
        rgbCode: 'rgb(0, 0, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'فضي' },
      update: {},
      create: {
        name: 'فضي',
        hexCode: '#C0C0C0',
        rgbCode: 'rgb(192, 192, 192)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أحمر' },
      update: {},
      create: {
        name: 'أحمر',
        hexCode: '#FF0000',
        rgbCode: 'rgb(255, 0, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أزرق' },
      update: {},
      create: {
        name: 'أزرق',
        hexCode: '#0000FF',
        rgbCode: 'rgb(0, 0, 255)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'رمادي' },
      update: {},
      create: {
        name: 'رمادي',
        hexCode: '#808080',
        rgbCode: 'rgb(128, 128, 128)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'بني' },
      update: {},
      create: {
        name: 'بني',
        hexCode: '#A52A2A',
        rgbCode: 'rgb(165, 42, 42)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أخضر' },
      update: {},
      create: {
        name: 'أخضر',
        hexCode: '#008000',
        rgbCode: 'rgb(0, 128, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'ذهبي' },
      update: {},
      create: {
        name: 'ذهبي',
        hexCode: '#FFD700',
        rgbCode: 'rgb(255, 215, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'برتقالي' },
      update: {},
      create: {
        name: 'برتقالي',
        hexCode: '#FFA500',
        rgbCode: 'rgb(255, 165, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'بنفسجي' },
      update: {},
      create: {
        name: 'بنفسجي',
        hexCode: '#800080',
        rgbCode: 'rgb(128, 0, 128)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'وردي' },
      update: {},
      create: {
        name: 'وردي',
        hexCode: '#FFC0CB',
        rgbCode: 'rgb(255, 192, 203)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أصفر' },
      update: {},
      create: {
        name: 'أصفر',
        hexCode: '#FFFF00',
        rgbCode: 'rgb(255, 255, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'بيج' },
      update: {},
      create: {
        name: 'بيج',
        hexCode: '#F5F5DC',
        rgbCode: 'rgb(245, 245, 220)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'كريمي' },
      update: {},
      create: {
        name: 'كريمي',
        hexCode: '#FFFDD0',
        rgbCode: 'rgb(255, 253, 208)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'رمادي غامق' },
      update: {},
      create: {
        name: 'رمادي غامق',
        hexCode: '#2F4F4F',
        rgbCode: 'rgb(47, 79, 79)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أزرق داكن' },
      update: {},
      create: {
        name: 'أزرق داكن',
        hexCode: '#00008B',
        rgbCode: 'rgb(0, 0, 139)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'أخضر داكن' },
      update: {},
      create: {
        name: 'أخضر داكن',
        hexCode: '#006400',
        rgbCode: 'rgb(0, 100, 0)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'برونزي' },
      update: {},
      create: {
        name: 'برونزي',
        hexCode: '#CD7F32',
        rgbCode: 'rgb(205, 127, 50)',
        isActive: true
      }
    }),
    prisma.colorOption.upsert({
      where: { name: 'نحاسي' },
      update: {},
      create: {
        name: 'نحاسي',
        hexCode: '#B87333',
        rgbCode: 'rgb(184, 115, 51)',
        isActive: true
      }
    })
  ])

  console.log('✅ Created colors:', colors.map(c => c.name))

  // Create default brands
  const brands = await Promise.all([
    // Japanese brands
    prisma.carBrand.upsert({
      where: { name: 'Toyota' },
      update: {},
      create: {
        name: 'Toyota',
        country: 'Japan',
        website: 'https://www.toyota.com',
        description: 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Honda' },
      update: {},
      create: {
        name: 'Honda',
        country: 'Japan',
        website: 'https://www.honda.com',
        description: 'Honda Motor Co., Ltd. is a Japanese public multinational conglomerate corporation primarily known as a manufacturer of automobiles.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Nissan' },
      update: {},
      create: {
        name: 'Nissan',
        country: 'Japan',
        website: 'https://www.nissan.com',
        description: 'Nissan Motor Co., Ltd. is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Mazda' },
      update: {},
      create: {
        name: 'Mazda',
        country: 'Japan',
        website: 'https://www.mazda.com',
        description: 'Mazda Motor Corporation is a Japanese multinational automobile manufacturer based in Fuchū, Aki District, Hiroshima Prefecture.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Suzuki' },
      update: {},
      create: {
        name: 'Suzuki',
        country: 'Japan',
        website: 'https://www.suzuki.com',
        description: 'Suzuki Motor Corporation is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Subaru' },
      update: {},
      create: {
        name: 'Subaru',
        country: 'Japan',
        website: 'https://www.subaru.com',
        description: 'Subaru Corporation is a Japanese multinational conglomerate primarily known as an automobile manufacturer.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Mitsubishi' },
      update: {},
      create: {
        name: 'Mitsubishi',
        country: 'Japan',
        website: 'https://www.mitsubishi-motors.com',
        description: 'Mitsubishi Motors Corporation is a Japanese multinational automobile manufacturer headquartered in Minato, Tokyo.',
        isActive: true
      }
    }),
    // German brands
    prisma.carBrand.upsert({
      where: { name: 'BMW' },
      update: {},
      create: {
        name: 'BMW',
        country: 'Germany',
        website: 'https://www.bmw.com',
        description: 'Bayerische Motoren Werke AG is a German multinational manufacturer of luxury vehicles.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Mercedes' },
      update: {},
      create: {
        name: 'Mercedes',
        country: 'Germany',
        website: 'https://www.mercedes-benz.com',
        description: 'Mercedes-Benz is a German global automotive marque and a division of Daimler AG.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Audi' },
      update: {},
      create: {
        name: 'Audi',
        country: 'Germany',
        website: 'https://www.audi.com',
        description: 'Audi is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Volkswagen' },
      update: {},
      create: {
        name: 'Volkswagen',
        country: 'Germany',
        website: 'https://www.volkswagen.com',
        description: 'Volkswagen is a German motor vehicle manufacturer headquartered in Wolfsburg, Lower Saxony, Germany.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Porsche' },
      update: {},
      create: {
        name: 'Porsche',
        country: 'Germany',
        website: 'https://www.porsche.com',
        description: 'Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche AG, is a German automobile manufacturer specializing in high-performance sports cars.',
        isActive: true
      }
    }),
    // American brands
    prisma.carBrand.upsert({
      where: { name: 'Ford' },
      update: {},
      create: {
        name: 'Ford',
        country: 'USA',
        website: 'https://www.ford.com',
        description: 'Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Chevrolet' },
      update: {},
      create: {
        name: 'Chevrolet',
        country: 'USA',
        website: 'https://www.chevrolet.com',
        description: 'Chevrolet, colloquially referred to as Chevy, is an American automobile division of the American manufacturer General Motors.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Tesla' },
      update: {},
      create: {
        name: 'Tesla',
        country: 'USA',
        website: 'https://www.tesla.com',
        description: 'Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Cadillac' },
      update: {},
      create: {
        name: 'Cadillac',
        country: 'USA',
        website: 'https://www.cadillac.com',
        description: 'Cadillac is a division of the American automobile manufacturer General Motors that designs and builds luxury vehicles.',
        isActive: true
      }
    }),
    // Korean brands
    prisma.carBrand.upsert({
      where: { name: 'Hyundai' },
      update: {},
      create: {
        name: 'Hyundai',
        country: 'South Korea',
        website: 'https://www.hyundai.com',
        description: 'Hyundai Motor Company is a South Korean multinational automotive manufacturer headquartered in Seoul.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Kia' },
      update: {},
      create: {
        name: 'Kia',
        country: 'South Korea',
        website: 'https://www.kia.com',
        description: 'Kia Corporation is a South Korean multinational automobile manufacturer headquartered in Seoul.',
        isActive: true
      }
    }),
    // Chinese brands
    prisma.carBrand.upsert({
      where: { name: 'Jetour' },
      update: {},
      create: {
        name: 'Jetour',
        country: 'China',
        website: 'https://www.jetour.com',
        description: 'Jetour is a Chinese automotive brand specializing in SUVs and crossovers, owned by Chery Automobile.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Geely' },
      update: {},
      create: {
        name: 'Geely',
        country: 'China',
        website: 'https://www.geely.com',
        description: 'Zhejiang Geely Holding Group Co., Ltd is a Chinese multinational automotive company headquartered in Hangzhou.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Livan' },
      update: {},
      create: {
        name: 'Livan',
        country: 'China',
        website: 'https://www.livan.com',
        description: 'Livan is a Chinese automotive brand focusing on new energy vehicles and smart mobility solutions.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Chery' },
      update: {},
      create: {
        name: 'Chery',
        country: 'China',
        website: 'https://www.chery.com',
        description: 'Chery Automobile Co., Ltd. is a Chinese automobile manufacturer headquartered in Wuhu, Anhui Province.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'BYD' },
      update: {},
      create: {
        name: 'BYD',
        country: 'China',
        website: 'https://www.byd.com',
        description: 'BYD Company Limited is a Chinese multinational manufacturing company headquartered in Shenzhen, Guangdong.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Great Wall' },
      update: {},
      create: {
        name: 'Great Wall',
        country: 'China',
        website: 'https://www.gwm.com',
        description: 'Great Wall Motor Company Limited is a Chinese automobile manufacturer headquartered in Baoding, Hebei.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'MG' },
      update: {},
      create: {
        name: 'MG',
        country: 'China',
        website: 'https://www.mg.co.uk',
        description: 'MG Motor UK Limited is a British automotive company headquartered in Longbridge, Birmingham, United Kingdom, and a subsidiary of SAIC Motor.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Haval' },
      update: {},
      create: {
        name: 'Haval',
        country: 'China',
        website: 'https://www.haval.com',
        description: 'Haval is a Chinese brand of SUVs produced by Great Wall Motors.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'GAC' },
      update: {},
      create: {
        name: 'GAC',
        country: 'China',
        website: 'https://www.gacmotor.com',
        description: 'GAC Motor is a Chinese automobile manufacturer headquartered in Guangzhou.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'NIO' },
      update: {},
      create: {
        name: 'NIO',
        country: 'China',
        website: 'https://www.nio.com',
        description: 'NIO is a Chinese automobile manufacturer headquartered in Shanghai, specializing in designing and developing electric vehicles.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'XPeng' },
      update: {},
      create: {
        name: 'XPeng',
        country: 'China',
        website: 'https://www.xiaopeng.com',
        description: 'XPeng Motors is a Chinese electric vehicle manufacturer headquartered in Guangzhou.',
        isActive: true
      }
    }),
    // French brands
    prisma.carBrand.upsert({
      where: { name: 'Renault' },
      update: {},
      create: {
        name: 'Renault',
        country: 'France',
        website: 'https://www.renault.com',
        description: 'Groupe Renault is a French multinational automobile manufacturer established in 1899.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Peugeot' },
      update: {},
      create: {
        name: 'Peugeot',
        country: 'France',
        website: 'https://www.peugeot.com',
        description: 'Peugeot is a French automotive manufacturer which is a part of Stellantis.',
        isActive: true
      }
    }),
    // Italian brands
    prisma.carBrand.upsert({
      where: { name: 'Fiat' },
      update: {},
      create: {
        name: 'Fiat',
        country: 'Italy',
        website: 'https://www.fiat.com',
        description: 'Fiat Automobiles S.p.A. is an Italian automobile manufacturer, a part of Stellantis.',
        isActive: true
      }
    }),
    prisma.carBrand.upsert({
      where: { name: 'Ferrari' },
      update: {},
      create: {
        name: 'Ferrari',
        country: 'Italy',
        website: 'https://www.ferrari.com',
        description: 'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy.',
        isActive: true
      }
    }),
    // Swedish brands
    prisma.carBrand.upsert({
      where: { name: 'Volvo' },
      update: {},
      create: {
        name: 'Volvo',
        country: 'Sweden',
        website: 'https://www.volvocars.com',
        description: 'Volvo Cars is a Swedish luxury automobile marque headquartered in Torslanda, Gothenburg.',
        isActive: true
      }
    })
  ])

  console.log('✅ Created brands:', brands.map(b => b.name))

  // Create default admin user
  const bcrypt = require('bcryptjs')
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@carmanagement.com',
      passwordHash: hashedPassword,
      fullName: 'مدير النظام',
      role: 'ADMIN',
      isActive: true
    }
  })

  console.log('✅ Created admin user:', adminUser.username)

  // Create additional users with different roles
  const viewerUser = await prisma.user.upsert({
    where: { username: 'viewer' },
    update: {},
    create: {
      username: 'viewer',
      email: 'viewer@carmanagement.com',
      passwordHash: hashedPassword,
      fullName: 'مستخدم قارئ',
      role: 'VIEWER',
      isActive: true
    }
  })

  const currencyManagerUser = await prisma.user.upsert({
    where: { username: 'currency_manager' },
    update: {},
    create: {
      username: 'currency_manager',
      email: 'currency@carmanagement.com',
      passwordHash: hashedPassword,
      fullName: 'مشرف العملات',
      role: 'CURRENCY_MANAGER',
      isActive: true
    }
  })

  const managerUser = await prisma.user.upsert({
    where: { username: 'manager1' },
    update: {},
    create: {
      username: 'manager1',
      email: 'manager1@carmanagement.com',
      passwordHash: hashedPassword,
      fullName: 'مدير النظام 1',
      role: 'MANAGER',
      isActive: true,
      createdBy: adminUser.id
    }
  })

  const managerUser2 = await prisma.user.upsert({
    where: { username: 'manager2' },
    update: {},
    create: {
      username: 'manager2',
      email: 'manager2@carmanagement.com',
      passwordHash: hashedPassword,
      fullName: 'مدير النظام 2',
      role: 'MANAGER',
      isActive: true,
      createdBy: adminUser.id
    }
  })

  console.log('✅ Created additional users:')
  console.log('   - viewer (قارئ فقط) - Password: admin123')
  console.log('   - currency_manager (مشرف عملات) - Password: admin123')
  console.log('   - manager1 (مدير 1) - Password: admin123')
  console.log('   - manager2 (مدير 2) - Password: admin123')

  // Create sample cars
  const usdCurrency = currencies.find(c => c.code === 'USD')
  const toyotaBrand = brands.find(b => b.name === 'Toyota')
  const bmwBrand = brands.find(b => b.name === 'BMW')
  const mercedesBrand = brands.find(b => b.name === 'Mercedes')
  const whiteColor = colors.find(c => c.name === 'أبيض')
  const blackColor = colors.find(c => c.name === 'أسود')
  const silverColor = colors.find(c => c.name === 'فضي')

  if (usdCurrency && toyotaBrand && whiteColor) {
    const toyotaCamry = await prisma.car.create({
      data: {
        brand: 'Toyota',
        model: 'Camry',
        year: 2024,
        color: 'أبيض',
        description: 'Toyota Camry 2024 - سيارة سيدان عائلية فاخرة بمحرك قوي وكفاءة استهلاك وقود ممتازة.',
        priceUSD: 25000,
        mileage: 0,
        fuelType: 'بنزين',
        transmission: 'أوتوماتيك',
        engineSize: '2.5L',
        horsepower: 203,
        doors: 4,
        seats: 5,
        bodyType: 'سيدان',
        roofType: 'لا يوجد',
        roofDetails: 'سقف عادي',
        seatMechanism: 'يدوي',
        condition: 'جديد',
        location: 'الجزائر العاصمة',
        isAvailable: true,
        isFeatured: true,
        currencyId: usdCurrency.id,
        carBrandId: toyotaBrand.id,
        colorOptionId: whiteColor.id,
        images: {
          create: [
            {
              url: '/api/placeholder/400/300',
              altText: 'Toyota Camry Front',
              isPrimary: true,
              order: 0
            },
            {
              url: '/api/placeholder/400/300',
              altText: 'Toyota Camry Side',
              isPrimary: false,
              order: 1
            }
          ]
        }
      }
    })
    console.log('✅ Created sample car:', toyotaCamry.brand, toyotaCamry.model)
  }

  if (usdCurrency && bmwBrand && blackColor) {
    const bmwX5 = await prisma.car.create({
      data: {
        brand: 'BMW',
        model: 'X5',
        year: 2023,
        color: 'أسود',
        description: 'BMW X5 2023 - سيارة SUV فاخرة بأداء استثنائي وتقنيات متطورة.',
        priceUSD: 65000,
        mileage: 15000,
        fuelType: 'بنزين',
        transmission: 'أوتوماتيك',
        engineSize: '3.0L',
        horsepower: 335,
        doors: 5,
        seats: 7,
        bodyType: 'SUV',
        roofType: 'بانوراميك',
        roofDetails: 'سقف بانوراميك كهربائي',
        seatMechanism: 'كهربائي',
        condition: 'مستعمل',
        location: 'وهران',
        isAvailable: true,
        isFeatured: false,
        currencyId: usdCurrency.id,
        carBrandId: bmwBrand.id,
        colorOptionId: blackColor.id,
        images: {
          create: [
            {
              url: '/api/placeholder/400/300',
              altText: 'BMW X5 Front',
              isPrimary: true,
              order: 0
            }
          ]
        }
      }
    })
    console.log('✅ Created sample car:', bmwX5.brand, bmwX5.model)
  }

  if (usdCurrency && mercedesBrand && silverColor) {
    const mercedesCClass = await prisma.car.create({
      data: {
        brand: 'Mercedes',
        model: 'C-Class',
        year: 2024,
        color: 'فضي',
        description: 'Mercedes C-Class 2024 - سيارة سيدان فاخرة بتصميم أنيق وأداء عالي.',
        priceUSD: 45000,
        mileage: 0,
        fuelType: 'بنزين',
        transmission: 'أوتوماتيك',
        engineSize: '2.0L',
        horsepower: 255,
        doors: 4,
        seats: 5,
        bodyType: 'سيدان',
        roofType: 'سنرووف',
        roofDetails: 'سنرووف يدوي',
        seatMechanism: 'أوتوماتيكي',
        condition: 'جديد',
        location: 'قسنطينة',
        isAvailable: true,
        isFeatured: true,
        currencyId: usdCurrency.id,
        carBrandId: mercedesBrand.id,
        colorOptionId: silverColor.id,
        images: {
          create: [
            {
              url: '/api/placeholder/400/300',
              altText: 'Mercedes C-Class Front',
              isPrimary: true,
              order: 0
            }
          ]
        }
      }
    })
    console.log('✅ Created sample car:', mercedesCClass.brand, mercedesCClass.model)
  }

  // Add a Chinese car sample
  const jetourBrand = brands.find(b => b.name === 'Jetour')
  const redColor = colors.find(c => c.name === 'أحمر')
  
  if (usdCurrency && jetourBrand && redColor) {
    const jetourX70 = await prisma.car.create({
      data: {
        brand: 'Jetour',
        model: 'X70',
        year: 2024,
        color: 'أحمر',
        description: 'Jetour X70 2024 - سيارة SUV صينية حديثة بمواصفات عالية وتصميم جذاب.',
        priceUSD: 22000,
        mileage: 0,
        fuelType: 'بنزين',
        transmission: 'أوتوماتيك',
        engineSize: '1.6L',
        horsepower: 197,
        doors: 5,
        seats: 7,
        bodyType: 'SUV',
        roofType: 'بانوراميك',
        roofDetails: 'سقف بانوراميك كهربائي كبير',
        seatMechanism: 'كهربائي',
        condition: 'جديد',
        location: 'الجزائر العاصمة',
        isAvailable: true,
        isFeatured: true,
        currencyId: usdCurrency.id,
        carBrandId: jetourBrand.id,
        colorOptionId: redColor.id,
        images: {
          create: [
            {
              url: '/api/placeholder/400/300',
              altText: 'Jetour X70 Front',
              isPrimary: true,
              order: 0
            },
            {
              url: '/api/placeholder/400/300',
              altText: 'Jetour X70 Side',
              isPrimary: false,
              order: 1
            }
          ]
        }
      }
    })
    console.log('✅ Created sample car:', jetourX70.brand, jetourX70.model)
  }

  // Add another Chinese car sample
  const geelyBrand = brands.find(b => b.name === 'Geely')
  const blueColor = colors.find(c => c.name === 'أزرق')
  
  if (usdCurrency && geelyBrand && blueColor) {
    const geelyCoolray = await prisma.car.create({
      data: {
        brand: 'Geely',
        model: 'Coolray',
        year: 2024,
        color: 'أزرق',
        description: 'Geely Coolray 2024 - سيارة كروس أوفر صغيرة مدمجة بتقنيات حديثة.',
        priceUSD: 18000,
        mileage: 0,
        fuelType: 'بنزين',
        transmission: 'أوتوماتيك',
        engineSize: '1.5L',
        horsepower: 177,
        doors: 5,
        seats: 5,
        bodyType: 'كروس أوفر',
        roofType: 'لا يوجد',
        roofDetails: 'سقف عادي',
        seatMechanism: 'يدوي',
        condition: 'جديد',
        location: 'وهران',
        isAvailable: true,
        isFeatured: false,
        currencyId: usdCurrency.id,
        carBrandId: geelyBrand.id,
        colorOptionId: blueColor.id,
        images: {
          create: [
            {
              url: '/api/placeholder/400/300',
              altText: 'Geely Coolray Front',
              isPrimary: true,
              order: 0
            }
          ]
        }
      }
    })
    console.log('✅ Created sample car:', geelyCoolray.brand, geelyCoolray.model)
  }

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })