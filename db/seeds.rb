earphones = Category.find_or_create_by(name: "earphones" )
speakers = Category.find_or_create_by(name: "speakers" )
headphones = Category.find_or_create_by(name: "headphones" )

earphones_yx1 = Product.find_or_create_by(name: "YX1 Wireless Earphones",
                                          also_name: "YX1 Earphones",
                                          cart_name: "YX1",
                                          slug: "yx1-earphones",
                                          description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                                          features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.", 
                                          price: 599, 
                                          new: true,
                                          category: earphones )

headphone_x59 = Product.find_or_create_by(name: "XX59 Headphones",
                                          also_name: "XX59",
                                          cart_name: "XX59",
                                          slug: "xx59-headphones",
                                          description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                                          features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.", 
                                          price: 899, 
                                          new: false,
                                          category: headphones )

headphone_x99_I = Product.find_or_create_by(name: "XX99 Mark I Headphones",
                                            also_name: "XX99 Mark I",
                                            cart_name: "XX99 MK I",
                                            slug: "xx99-mark-one-headphones",
                                            description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                                            features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.", 
                                            price: 1750, 
                                            new: false,
                                            category: headphones )

headphone_x99_II = Product.find_or_create_by(name: "XX99 Mark II Headphones", 
                                             also_name: "XX99 Mark II",
                                             cart_name: "XX99 MK II",
                                             slug: "xx99-mark-two-headphones",
                                             description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                                             features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.", 
                                             price: 2999, 
                                             new: true,
                                             category: headphones )

speaker_zx7 = Product.find_or_create_by(name: "ZX7 Speaker",
                                        also_name: "ZX7 Speaker",
                                        cart_name: "ZX7",
                                        slug: "zx7-speaker",
                                        description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
                                        features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.", 
                                        price: 3500, 
                                        new: false,
                                        category: speakers)

speaker_zx9 = Product.find_or_create_by(name: "ZX9 Speaker", 
                                        also_name: "ZX9 Speaker",
                                        cart_name: "ZX9",
                                        slug: "zx9-speaker",
                                        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                                        features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.", 
                                        price: 4500, 
                                        new: true,
                                        category: speakers)

# ----------------------- Accessories --------------------------------

# --------- Earphones YX1 

earphones_yx1.accessories.create(quantity: 2, name: "Earphone unit")
earphones_yx1.accessories.create(quantity: 6, name: "Mulit-size earplugs")
earphones_yx1.accessories.create(quantity: 1, name: "User manual")
earphones_yx1.accessories.create(quantity: 1, name: "USB-C charging cable")
earphones_yx1.accessories.create(quantity: 1, name: "Travel pouch")

# --------- Headphones XX59

headphone_x59.accessories.create(quantity: 1, name: "Headphone unit")
headphone_x59.accessories.create(quantity: 2, name: "Replacement earcups")
headphone_x59.accessories.create(quantity: 1, name: "User manual")
headphone_x59.accessories.create(quantity: 1, name: "3.5mm 5m audio cable")

# --------- Headphones XX99 Mark I

headphone_x99_I.accessories.create(quantity: 1, name: "Headphone unit")
headphone_x99_I.accessories.create(quantity: 2, name: "Replacement earcups")
headphone_x99_I.accessories.create(quantity: 1, name: "User manual")
headphone_x99_I.accessories.create(quantity: 1, name: "3.5mm 5m audio cable")

# --------- Headphones XX99 Mark I

headphone_x99_II.accessories.create(quantity: 1, name: "Headphone unit")
headphone_x99_II.accessories.create(quantity: 2, name: "Replacement earcups")
headphone_x99_II.accessories.create(quantity: 1, name: "User manual")
headphone_x99_II.accessories.create(quantity: 1, name: "3.5mm 5m audio cable")
headphone_x99_II.accessories.create(quantity: 1, name: "Travel bag")

# --------- Speaker ZX7

speaker_zx7.accessories.create(quantity: 1, name: "Speaker unit")
speaker_zx7.accessories.create(quantity: 2, name: "Speaker cloth panel")
speaker_zx7.accessories.create(quantity: 1, name: "User manual")
speaker_zx7.accessories.create(quantity: 1, name: "3.5mm 7.5mm audio cable")
speaker_zx7.accessories.create(quantity: 1, name: "7.5m optical cable")

# --------- Speaker ZX9

speaker_zx9.accessories.create(quantity: 1, name: "Speaker unit")
speaker_zx9.accessories.create(quantity: 2, name: "Speaker cloth panel")
speaker_zx9.accessories.create(quantity: 1, name: "User manual")
speaker_zx9.accessories.create(quantity: 1, name: "3.5mm 7.5mm audio cable")
speaker_zx9.accessories.create(quantity: 1, name: "10m optical cable")


# ----------------------- Attach images ------------------------------

earphones_yx1.mobile_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-product.jpg"), filename: "image-prduct.jpg")
earphones_yx1.tablet_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-product.jpg"), filename: "image-prduct.jpg")
earphones_yx1.desktop_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-product.jpg"), filename: "image-prduct.jpg")
earphones_yx1.category_mobile_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/mobile/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg")
earphones_yx1.category_tablet_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/tablet/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg")
earphones_yx1.category_desktop_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/desktop/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg")
earphones_yx1.cart_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/cart/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg")

headphone_x59.mobile_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-product.jpg"), filename: "image-product.jpg")
headphone_x59.tablet_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-product.jpg"), filename: "image-product.jpg")
headphone_x59.desktop_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-product.jpg"), filename: "image-product.jpg")
headphone_x59.category_mobile_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/category/mobile/image-xx59.jpg"), filename: "image-xx59.jpg")
headphone_x59.category_tablet_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/category/tablet/image-xx59.jpg"), filename: "image-xx59.jpg")
headphone_x59.category_desktop_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/category/desktop/image-xx59.jpg"), filename: "image-xx59.jpg")
headphone_x59.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg")
headphone_x59.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg")
headphone_x59.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg")
headphone_x59.cart_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/cart/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg")

headphone_x99_I.mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/mobile/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_I.tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/tablet/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_I.desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/desktop/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_I.category_mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/category/mobile/image-xx99-mark-one.jpg"), filename: "image-xx99-mark-one.jpg")
headphone_x99_I.category_tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/category/tablet/image-xx99-mark-one.jpg"), filename: "image-xx99-mark-one.jpg")
headphone_x99_I.category_desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/category/desktop/image-xx99-mark-one.jpg"), filename: "image-xx99-mark-one.jpg")
headphone_x99_I.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/mobile/image-xx99-mark-one-headphones.jpg"), filename: "image-xx99-mark-one-headphones.jpg")
headphone_x99_I.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/tablet/image-xx99-mark-one-headphones.jpg"), filename: "image-xx99-mark-one-headphones.jpg")
headphone_x99_I.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/desktop/image-xx99-mark-one-headphones.jpg"), filename: "image-xx99-mark-one-headphones.jpg")
headphone_x99_I.cart_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/cart/image-xx99-mark-one-headphones.jpg"), filename: "image-xx99-mark-one-headphones.jpg")

headphone_x99_II.mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_II.tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_II.desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg"), filename: "image-product.jpg")
headphone_x99_II.category_mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/category/mobile/image-xx99-mark-two.jpg"), filename: "image-xx99-mark-two.jpg")
headphone_x99_II.category_tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/category/tablet/image-xx99-mark-two.jpg"), filename: "image-xx99-mark-two.jpg")
headphone_x99_II.category_desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/category/desktop/image-xx99-mark-two.jpg"), filename: "image-xx99-mark-two.jpg")
headphone_x99_II.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/mobile/image-xx99-mark-two-headphones.jpg"), filename: "image-xx99-mark-two-headphones.jpg")
headphone_x99_II.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/tablet/image-xx99-mark-two-headphones.jpg"), filename: "image-xx99-mark-two-headphones.jpg")
headphone_x99_II.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/desktop/image-xx99-mark-two-headphones.jpg"), filename: "image-xx99-mark-two-headphones.jpg")
headphone_x99_II.cart_image.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/cart/image-xx99-mark-two-headphones.jpg"), filename: "image-xx99-mark-two-headphones.jpg")

speaker_zx7.mobile_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/mobile/image-product.jpg"), filename: "image-product.jpg")
speaker_zx7.tablet_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/tablet/image-product.jpg"), filename: "image-product.jpg")
speaker_zx7.desktop_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/desktop/image-product.jpg"), filename: "image-product.jpg")
speaker_zx7.category_mobile_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/category/mobile/image-zx7.jpg"), filename: "image-zx7.jpg")
speaker_zx7.category_tablet_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/category/tablet/image-zx7.jpg"), filename: "image-zx7.jpg")
speaker_zx7.category_desktop_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/category/desktop/image-zx7.jpg"), filename: "image-zx7.jpg")
speaker_zx7.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/mobile/image-zx7-speaker.jpg"), filename: "image-zx7-speaker.jpg")
speaker_zx7.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/tablet/image-zx7-speaker.jpg"), filename: "image-zx7-speaker.jpg")
speaker_zx7.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/desktop/image-zx7-speaker.jpg"), filename: "image-zx7-speaker.jpg")
speaker_zx7.cart_image.attach(io: File.open("app/assets/images/products/product-zx7-speaker/cart/image-zx7-speaker.jpg"), filename: "image-zx7-speaker.jpg")

speaker_zx9.mobile_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/mobile/image-product.jpg"), filename: "image-product.jpg")
speaker_zx9.tablet_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/tablet/image-product.jpg"), filename: "image-product.jpg")
speaker_zx9.desktop_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/desktop/image-product.jpg"), filename: "image-product.jpg")
speaker_zx9.category_mobile_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/category/mobile/image-zx9.jpg"), filename: "image-zx9.jpg")
speaker_zx9.category_tablet_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/category/tablet/image-zx9.jpg"), filename: "image-zx9.jpg")
speaker_zx9.category_desktop_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/category/desktop/image-zx9.jpg"), filename: "image-zx9.jpg")
speaker_zx9.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/mobile/image-zx9-speaker.jpg"), filename: "image-zx9-speaker.jpg")
speaker_zx9.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/tablet/image-zx9-speaker.jpg"), filename: "image-zx9-speaker.jpg")
speaker_zx9.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/desktop/image-zx9-speaker.jpg"), filename: "image-zx9-speaker.jpg")
speaker_zx9.cart_image.attach(io: File.open("app/assets/images/products/product-zx9-speaker/cart/image-zx9-speaker.jpg"), filename: "image-zx9-speaker.jpg")


# --------------------------- Gallery Images ------------------------------------------------

# ------------ Earphones_yx1

# --- mobile
earphones_yx1.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
earphones_yx1.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
earphones_yx1.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
earphones_yx1.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
earphones_yx1.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
earphones_yx1.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
earphones_yx1.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
earphones_yx1.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
earphones_yx1.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# ------------ Headphones X59

# --- mobile
headphone_x59.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x59.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x59.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
headphone_x59.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x59.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x59.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
headphone_x59.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x59.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x59.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# ------------ Headphone x99 mark one

# --- mobile
headphone_x99_I.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_I.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_I.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
headphone_x99_I.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_I.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_I.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
headphone_x99_I.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_I.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_I.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# ------------ Headphones x99 mark two

# --- mobile
headphone_x99_II.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_II.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_II.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
headphone_x99_II.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_II.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_II.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
headphone_x99_II.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
headphone_x99_II.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
headphone_x99_II.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# ------------ Speaker zx7

# --- mobile
speaker_zx7.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx7.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx7.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
speaker_zx7.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx7.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx7.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
speaker_zx7.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx7.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx7.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx7-speaker/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# ------------ Speaker zx9

# --- mobile
speaker_zx9.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx9.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx9.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- tablet
speaker_zx9.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx9.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx9.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")

# --- desktop
speaker_zx9.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg")
speaker_zx9.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg")
speaker_zx9.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-zx9-speaker/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg")




