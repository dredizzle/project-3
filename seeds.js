const mongoose = require('mongoose')
const { dbURI } = require('./config/environment')
const User = require('./models/User')
const Book = require('./models/Book')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([{
        username: "seangray1",
        email: "sean.myles.gray@gmail.com",
        password: "pass",
        passwordConfirmation: "pass"
      }, {
        username: "gabelton",
        email: "gabelton@gables.com",
        password: "pass",
        passwordConfirmation: "pass",
        image: "https://i.imgur.com/aFoCicH.jpg"
      }, {
        username: "eprice",
        email: "ekprice01@gmail.com",
        password: "pass",
        passwordConfirmation: "pass",
        image: "https://s1.r29static.com//bin/entry/9d4/x,80/2164076/taylor-swift-cant-stop-teasing-2164076.jpg"
      }])
    })
    .then(users => {
      const [sean, gabe, emma] = users
      return Book.create([{
        author: "Oyinkan Braithwaite",
        title: "My Sister, the Serial Killer",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523366732l/38819868._SY475_.jpg",
        releaseYear: 2018,
        genre: "Mystery",
        pg: 226,
        ISBN: "0385544235",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07D7KJV13",
        description: "My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",
        createdBy: emma
      }, {
        author: "Harlan Coben",
        title: "Run Away",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533567545l/40697540.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 371,
        ISBN: "1538748460",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0791ZS353",
        description: "A perfect family is shattered in RUN AWAY, the new thriller from the master of domestic suspense, Harlan Coben.You've lost your daughter.She's addicted to drugs and to an abusive boyfriend. And she's made it clear that she doesn't want to be found.Then, by chance, you see her playing guitar in Central Park.But she's not the girl you remember. This woman is living on the edge, frightened, and clearly in trouble.You don't stop to think. You approach her, beg her to come home.She runs.And you do the only thing a parent can do: you follow her into a dark and dangerous world you never knew existed. Before you know it, both your family and your life are on the line. And in order to protect your daughter from the evils of that world, you must face them head on. ",
        createdBy: emma
      }, {
        author: "Jane Harper",
        title: "The Lost Man",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549469559l/39863488._SY475_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 340,
        ISBN: "1250105684",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DX23VP3",
        description: "Two brothers meet at the border of their vast cattle properties under the unrelenting sun of outback Queensland, in this stunning new standalone novel from New York Times bestseller Jane HarperThey are at the stockman’s grave, a landmark so old, no one can remember who is buried there. But today, the scant shadow it casts was the last hope for their middle brother, Cameron. The Bright family’s quiet existence is thrown into grief and anguish. Something had been troubling Cameron. Did he lose hope and walk to his death? Because if he didn’t, the isolation of the outback leaves few suspects…Dark, suspenseful, and deeply atmospheric, The Lost Man is the highly anticipated next book from the bestselling and award-winning Jane Harper, author of The Dry and Force of Nature",
        createdBy: emma
      }, {
        author: "Greer Hendricks, Sarah Pekkanen",
        title: "An Anonymous Girl",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546956642l/39863515._SY475_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 375,
        ISBN: "1250133734",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4",
        description: "The next novel of psychological suspense and obsession from the authors of the blockbuster bestseller The Wife Between Us. Seeking women ages 18–32 to participate in a study on ethics and morality. Generous compensation. Anonymity guaranteed.When Jessica Farris signs up for a psychology study conducted by the mysterious Dr. Shields, she thinks all she’ll have to do is answer a few questions, collect her money, and leave.Question #1: Could you tell a lie without feeling guilt? But as the questions grow more and more intense and invasive and the sessions become outings where Jess is told what to wear and how to act, she begins to feel as though Dr. Shields may know what she’s thinking… and what she’s hiding.As Jess’s paranoia grows, it becomes clear that she can no longer trust what in her life is real, and what is one of Dr. Shields’ manipulative experiments. Caught in a web of deceit and jealousy, Jess quickly learns that some obsessions can be deadly.",
        createdBy: emma

      }, {
        author: "Sally Hepworth",
        title: "The Mother-in-Law",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546452406l/39863405._SX318_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 340,
        ISBN: "1250120926",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DGC1GWF",
        description: "Someone once told me that you have two families in your life - the one you are born into and the one you choose. Yes, you may get to choose your partner, but you don't choose your mother-in-law. The cackling mercenaries of fate determine it all.From the moment Lucy met Diana, she was kept at arm's length. Diana is exquisitely polite, but Lucy knows, even after marrying Oliver, that they'll never have the closeness she'd been hoping for.But who could fault Diana? She was a pillar of the community, an advocate for social justice, the matriarch of a loving family. Lucy had wanted so much to please her new mother-in-law.That was ten years ago. Now, Diana has been found dead, leaving a suicide note. But the autopsy reveals evidence of suffocation. And everyone in the family is hiding something.From the bestselling author of The Family Next Door comes a new page-turner about that trickiest of relationships.",
        createdBy: emma
      }, {
        author: "Tamsyn Muir",
        title: "Gideon the Ninth",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 448,
        ISBN: "1250313198",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J6HWLPR",
        description: "My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      }, {
        author: "Rebecca Roanhorse",
        title: "Resistance Reborn",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572828304l/45452530._SY475_.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 295,
        ISBN: "0593128427",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07RDD92XD",
        description: "The heroes of the Resistance must fight back fro the edge of the oblivion in this pivotal prequel to Star Wars: The Rise of Skywalker.The Resistance is in ruins. In the wake of their harrowing escape from Crait, what was once an army has been reduced to a handful of wounded heroes. Finn, Poe, Rey, Rose, Chewbacca, Leia Organa -- their names are famous among the oppressed worlds they fight to liberate. But names can only get you so far, and Leia's last desperate call for aid has gone unanswered.From jungles of Ryloth to the shipyards of Corellia, the shadow of the First Order looms large, and those with the bravery to face the darkness are scattered and isolated. If hope is to survive, the Resistance must journey throughout the galaxy, seeking out more leaders - including those who, in days gone by, helped a nascent rebellion tripple an empire. Battles will be fought, alliances will be forged, and the Resistance will be reborn.",
        createdBy: emma

      },
      {
        author: "Blake Crouch",
        title: "Recursion",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543687940l/42046112.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 336,
        ISBN: "1524759783",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07LCSPGTN",
        description: "That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.That's what neuroscientist Helena Smith believes. It’s why she’s dedicated her life to creating a technology that will let us preserve our most precious memories. If she succeeds, anyone will be able to re-experience a first kiss, the birth of a child, the final moment with a dying parent.As Barry searches for the truth, he comes face-to-face with an opponent more terrifying than any disease—a force that attacks not just our minds but the very fabric of the past. And as its effects begin to unmake the world as we know it, only he and Helena, working together, will stand a chance at defeating it.But how can they make a stand when reality itself is shifting and crumbling all around them?",
        createdBy: emma

      }, {
        author: "Martin L. Shoemaker",
        title: "The Last Dance",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562829205l/44067572.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 464,
        ISBN: "1534439862",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KS83CGJ",
        description: "In space, mutiny means death—that’s why Inspector General Park Yerim is taking her investigation so seriously. The alleged mutineer is Captain Nicolau Aames, whose command of the massive Earth-Mars vessel Aldrin has come under fire. The vast System Initiative says he disobeyed orders, but his crew swears he’s in the right.",
        createdBy: emma

      }, {
        author: "Neal Stephenson",
        title: "Fall, Or Dodge in Hell",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548719156l/41824495._SY475_.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 896,
        ISBN: "1534439862",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4",
        description: "Yetu holds the memories for her people—water-dwelling descendants of pregnant African slave women thrown overboard by slave owners—who live idyllic lives in the deep. Their past, too traumatic to be remembered regularly, is forgotten by everyone, save one—the historian. This demanding role has been bestowed on Yetu.Yetu remembers for everyone, and the memories, painful and wonderful, traumatic and terrible and miraculous, are destroying her. And so, she flees to the surface, escaping the memories, the expectations, and the responsibilities—and discovers a world her people left behind long ago.Yetu will learn more than she ever expected to about her own past—and about the future of her people. If they are all to survive, they’ll need to reclaim the memories, reclaim their identity—and own who they really are.",
        createdBy: emma

      }, {
        author: " Jonathan Maberry ",
        title: "Rage",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569295288l/43263146.jpg",
        releaseYear: 2019,
        genre: "Horror",
        pg: 464,
        ISBN: "1250303575",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07P7BXMB4",
        description: "Rage is the first title in Jonathan Maberry's brand new Joe Ledger spin-off series of international weird science thrillers.A small island off the coast of Japan is torn apart by a bioweapon that drives everyone—men, women, and children—insane with murderous rage. The people behind that attack want Korea united or destroyed. No middle ground. No mercy. And they are willing to punish any country that stands in the way—the United States, China, and Japan could all be consumed by a plague of pure destructive slaughter.Joe Ledger leads his newly formed band of international troubleshooters in their first mission to stop the terror cell, fighting alongside agents from North and South Korea. With the lives of billions at stake, Ledger is willing to bring his own brand of terror to this frightening new war.Rage is the first of the new adventures of Joe Ledger and Rogue Team International.",
        createdBy: emma

      }, {
        author: " Stephen King",
        title: "Elevation",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542040067l/38355410._SX318_.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 146,
        ISBN: "1982102314",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DNFC1C9",
        description: "Although Scott Carey doesn’t look any different, he’s been steadily losing weight. There are a couple of other odd things, too. He weighs the same in his clothes and out of them, no matter how heavy they are. Scott doesn’t want to be poked and prodded. He mostly just wants someone else to know, and he trusts Doctor Bob Ellis.",
        createdBy: emma

      },
      {
        author: "Paul Tremblay ",
        title: "The Cabin at the End of the World",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511884752l/36381091.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 272,
        ISBN: "0062679104",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07F1X87BB",

        description: "The Bram Stoker Award-winning author of A Head Full of Ghosts adds an inventive twist to the home invasion horror story in a heart-palpitating novel of psychological suspense that recalls Stephen King’s Misery, Ruth Ware’s In a Dark, Dark Wood, and Jack Ketchum’s cult hit The Girl Next Door.Seven-year-old Wen and her parents, Eric and Andrew, are vacationing at a remote cabin on a quiet New Hampshire lake. Their closest neighbors are more than two miles in either direction along a rutted dirt road...",
        createdBy: emma

      },
      {
        author: "Alma Katsu",
        title: "The Hunger",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497803277l/30285766.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 376,
        ISBN: "0735212511",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B071G7CSHP",
        description: "Tamsen Donner must be a witch. That is the only way to explain the series of misfortunes that have plagued the wagon train known as the Donner Party. Depleted rations, bitter quarrels, and the mysterious death of a little boy have driven the pioneers to the brink of madness. They cannot escape the feeling that someone--or something--is stalking them. Whether it was a curse from the beautiful Tamsen, the choice to follow a disastrous experimental route West, or just plain bad luck--the 90 men, women, and children of the Donner Party are at the brink of one of the deadliest and most disastrous western adventures in American history.While the ill-fated group struggles to survive in the treacherous mountain conditions--searing heat that turns the sand into bubbling stew; snows that freeze the oxen where they stand--evil begins to grow around them, and within them. As members of the party begin to disappear, they must ask themselves",
        createdBy: emma

      }, {
        author: "Alison Littlewood",
        title: "Mistletoe",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555411630l/43260175._SY475_.jpg",
        releaseYear: 2019,
        genre: "Horror",
        pg: 304,
        ISBN: "0735212517",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KFLNL7F",
        description: "Leah Hamilton is looking for a new life following the tragic deaths of her husband and son. Determined to bury her grief in hard work, and desperate to escape Christmas and the pitying looks of her colleagues, she rushes through the purchase of a run-down Yorkshire farmhouse, arriving just as the snow shrouds her new home.",
        createdBy: emma

      },
      {
        author: "America's Test Kitchen",
        title: "The Side Dish Bible: 1001 Perfect Recipes for Every Vegetable, Rice, Grain, and Bean Dish You Will Ever Need",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573121632l/44291121._SX318_.jpg",
        releaseYear: 2019,
        genre: "Cooking",
        pg: 574,
        ISBN: "B07NKRJZ7X",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NKRJZ7X",
        description: "A roadmap to help home cooks round out and enhance any meal, for any occasion with 1001 recipes for every type of side dish imaginable.Every cook struggles over making side dishes, from choosing what goes best with the main course to getting stuck in a rut making the same tired green beans and rice. But this destined-to-be-dog-ear'd compendium of side dishes changes all",
        createdBy: emma

      }, {
        author: "The Good Place",
        title: "Forking Good: A Cookbook Inspired",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561637216l/46131607.jpg",
        releaseYear: 2019,
        genre: "Cooking",
        pg: 160,
        ISBN: "9781683691556",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NKNX6RL",
        description: "A fun, lively, and fully illustrated cookbook of 30 original and practical recipes inspired by NBC's hit sitcom The Good Place, filled with the absurd, pun-driven food humor and accessible philosophy that makes the show so popular with fans.With its high concept, exceptional writing, eye-popping set design, stellar cast, meaningful explorations of what it means to be a..",
        createdBy: emma

      }, {
        author: "Samin Nosrat",
        title: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475460859l/30753841._SX318_.jpg",
        releaseYear: 2019,
        genre: "Cooking",
        pg: 480,
        ISBN: "1476753830",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01MQCCXPW",
        description: "A visionary new master class in cooking that distills decades of professional experience into just four simple elements, from the woman declared “America’s next great cooking teacher” by Alice Waters",
        createdBy: emma

      }, {
        author: "Suzanne Lenzer",
        title: "Graze: Inspiration for Small Plates and Meandering Meals",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492920730l/31450748._SX318_.jpg",
        releaseYear: 2017,
        genre: "Cooking",
        pg: 205,
        ISBN: "ISBN1623367530",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01MYZ3IPA",
        description: "Grazing is an enchanting way to eat. It means skipping from dish to dish, tasting different things without committing to a single one. It’s about creating multiple dishes that work together as a meal, that all share a theme, an aesthetic. When she entertains, or even pulls together a quick dinner for just two, food stylist Suzanne Lenzer enjoys this tapas-style of eating—",
        createdBy: emma

      }, {
        author: " Yotam Ottolenghi, Helen Goh",
        title: "Sweet",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510017230l/34063669._SX318_.jpg",
        releaseYear: 2017,
        genre: "Cooking",
        pg: 368,
        ISBN: "1607749149",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07521VCHD",
        description: "In his stunning new baking and desserts cookbook Yotam Ottolenghi and his long-time collaborator Helen Goh bring the Ottolenghi hallmarks of fresh, evocative ingredients, exotic spices and complex flavourings - including fig, rose petal, saffron, aniseed, orange blossom, pistachio and cardamom - to indulgent cakes, biscuits, tarts, puddings, cheesecakes and ice cream.",
        createdBy: emma

      },
      {
        author: "Catherine McCormack",
        title: "The Art of Looking Up",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571688503l/43885165._SX318_.jpg",
        releaseYear: 2019,
        genre: "Art",
        pg: 240,
        ISBN: "0711242178 ",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZWC2H86",
        description: "The Art of Looking Up surveys 40 spectacular ceilings around the globe that have been graced by the brushes of great artists including Michelangelo, Marc Chagall and Cy Twombly.From the floating women and lotus flowers of the Senso-ji Temple in Japan, to the religious iconography that adorns places of worship from Vienna to Istanbul, all the way to bold displays like the Chihuly glass flora suspended from the lobby of the Bellagio Hotel in Las Vegas: this book takes you on a tour of the extraordinary artworks that demand an alternative viewpoint.",
        createdBy: emma

      },
      {
        author: "John Berger",
        title: "Ways of Seeing",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464018308l/2784._SY475_.jpg",
        releaseYear: 1990,
        genre: "Art",
        pg: 176,
        ISBN: "0140135154",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B002ZJSV78",
        description: "John Berger's Ways of Seeing is one of the most stimulating and the most influential books on art in any language. First published in 1972, it was based on the BBC television series about which the (London) Sunday Times critic commented: 'This is an eye-opener in more ways than one: by concentrating on how we look at paintings ",
        createdBy: emma

      },
      {
        author: "Leo Tolstoy, Aylmer Maude",
        title: "What Is Art?",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171944592l/127963._SY475_.jpg",
        releaseYear: 2000,
        genre: "Art",
        pg: 252,
        ISBN: "0735102937",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00FVE9WMW",
        description: "During the decades of his world fame as sage & preacher as well as author of War & Peace & Anna Karenina, Tolstoy wrote prolifically in a series of essays & polemics on issues of morality, social justice & religion. These culminated in What is Art?, published in 1898. Although Tolstoy perceived the question of art to be a religious one, he considered...",
        createdBy: emma

      }, {
        author: "David Airey",
        title: "Logo Design Love: A Guide to Creating Iconic Brand Identities",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347407513l/6728983.jpg",
        releaseYear: 2011,
        genre: "Art",
        pg: 216,
        ISBN: "0321660765",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00MTUNHDG",

        description: "There are a lot of books out there that show collections of logos. But David Airey’s “Logo Design Love” is something different: it’s a guide for designers (and clients) who want to understand what this mysterious business is all about. Written in reader-friendly, concise language, with a minimum of designer jargon, Airey gives a surprisingly clear explanation of the...",
        createdBy: emma

      }, {
        author: "Emma Mills",
        title: "First & Then",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1426513843l/23310751.jpg",
        releaseYear: 2019,
        genre: "Art",
        pg: 272,
        ISBN: "162779235X",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00V37BBJI",

        description: "Devon Tennyson wouldn't change a thing. She's happy watching Friday night games from the bleachers, silently crushing on best friend Cas, and blissfully ignoring the future after high school. But the universe has other plans. It delivers Devon's cousin Foster, an unrepentant social outlier with a surprising talent for football, and the obnoxiously superior and maddeningly...",
        createdBy: emma

      }, {
        author: "Heather Morris ",
        title: "The Tattooist of Auschwitz",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525962117l/38359036.jpg",
        releaseYear: 2018,
        genre: "History",
        pg: 262,
        ISBN: "006287067X",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B074CG2SGV",

        description: "In April 1942, Lale Sokolov, a Slovakian Jew, is forcibly transported to the concentration camps at Auschwitz-Birkenau. When his captors discover that he speaks several languages, he is put to work as a Tätowierer (the German word for tattooist), tasked with permanently marking his fellow prisoners.",
        createdBy: emma

      },
      {
        author: "Stephen Fry",
        title: "Mythos: The Greek Myths Retold",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502518360l/35074096._SY475_.jpg",
        releaseYear: 2017,
        genre: "History",
        pg: 416,
        ISBN: "0718188721 ",
        preview: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502518360l/35074096._SY475_.jpg",

        description: "The Greek myths are the greatest stories ever told, passed down through millennia and inspiring writers and artists as varied as Shakespeare, Michelangelo, James Joyce and Walt Disney.They are embedded deeply in the traditions, tales and cultural DNA of the West. In Stephen Fry's hands the stories of the titans and gods become a brilliantly entertaining account of ribaldry",
        createdBy: emma

      }, {
        author: "Alan Hlad",
        title: "The Long Flight Home",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542021872l/42422509.jpg",
        releaseYear: 2019,
        genre: "History",
        pg: 304,
        ISBN: "1496721675",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07N6DV2V5",

        description: "Inspired by fascinating, true, yet little-known events during World War II, The Long Flight Home is a testament to the power of courage in our darkest hours—a moving, masterfully written story of love and sacrifice.It is September 1940—a year into the war—and as German bombs fall on Britain, fears grow of an impending invasion. Enemy fighter planes blacken the sky around...",
        createdBy: emma

      }, {
        author: "Georgia Hunter",
        title: "We Were the Lucky Ones",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471282781l/30267929.jpg",
        releaseYear: 2017,
        genre: "History",
        pg: 403,
        ISBN: "0399563083",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01M3TX4FQ",

        description: "It is the spring of 1939 and three generations of the Kurc family are doing their best to live normal lives, even as the shadow of war grows closer. The talk around the family Seder table is of new babies and budding romance, not of the increasing hardships threatening Jews in their hometown of Radom, Poland. But soon the horrors overtaking Europe will become inescapable ",
        createdBy: emma

      }, {
        author: "Adam Higginbotham",
        title: "Midnight in Chernobyl: The Untold Story of the World's Greatest Nuclear Disaster",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545577007l/40538681.jpg",
        releaseYear: 2019,
        genre: "History",
        pg: 538,
        ISBN: "1501134612",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0741QVVPJ",

        description: "The definitive, dramatic untold story of the Chernobyl nuclear power plant disaster, based on original reporting and new archival research.April 25, 1986, in Chernobyl, was a turning point in world history. The disaster not only changed the world’s perception of nuclear power and the science that spawned it, but also our understanding of the planet’s delicate ecology...",
        createdBy: emma

      }, {
        author: "Levison Wood",
        title: "Walking the Americas",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478735694l/32934182._SY475_.jpg",
        releaseYear: 2019,
        genre: "Travel",
        pg: 304,
        ISBN: "B01KTS4XSM",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01KTS4XSM",

        description: "'Levison Wood has breathed new life into adventure travel.' Michael Palin.Walking the Americas chronicles Levison Wood's 1,800 mile trek along the spine of the Americas, through eight countries, from Mexico to Colombia,",
        createdBy: emma

      }, {
        author: "Levison Wood",
        title: "Walking the Himalayas",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448830838l/27161842.jpg",
        releaseYear: 2015,
        genre: "Travel",
        pg: 293,
        ISBN: "031635242X",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B014DUSMCA",

        description: "Following his trek along the length of the Nile River, explorer Levison Wood takes on his greatest challenge yet-navigating the treacherous foothills of the Himalayas, the world's highest mountain range.Praised by Bear Grylls, Levison Wood has been called 'the toughest man on TV' (The Times UK). Now, following in the footsteps of the great explorers, Levison recounts the...",
        createdBy: emma

      }, {
        author: "Adam Shoalts",
        title: "Beyond the Trees: A Journey Alone Across Canada's Arctic",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565397926l/43671672.jpg",
        releaseYear: 2019,
        genre: "Travel",
        pg: 288,
        ISBN: "0735236836",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07MMKL334",

        description: "In the spring of 2017, Adam Shoalts, bestselling author and adventurer, set off on an unprecedented solo journey across North America's greatest wilderness. A place where, in our increasingly interconnected, digital world, it's still possible to wander for",
        createdBy: emma

      }, {
        author: "Jill Heinerth",
        title: "Into the Planet: My Life as a Cave Diver",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563335080l/43131602.jpg",
        releaseYear: 2019,
        genre: "Travel",
        pg: 288,
        ISBN: "0062691546",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07FGX37GZ",

        description: "From one of the world’s most renowned cave divers, a firsthand account of exploring the earth’s final frontier: the hidden depths of our oceans and the sunken caves inside our planet.More people have died exploring underwater caves than climbing Mount Everest, and we know more about deep space than we do about the depths of our oceans. From one of the top cave divers",
        createdBy: emma

      }, {
        author: "Jeff Gordinier",
        title: "Hungry: Eating, Road-Tripping, and Risking It All with the Greatest Chef in the World",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541419814l/42590641.jpg",
        releaseYear: 2019,
        genre: "Travel",
        pg: 240,
        ISBN: "1524759643",
        preview: "https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ST2L9GS",

        description: "Hungry is a book about not only the hunger for food, but for risk, for reinvention, for creative breakthroughs, and for connection. Feeling stuck in his work and home life, writer Jeff Gordinier happened into a fateful meeting with Danish chef Ren Redzepi, whose restaurant, Noma, has been called the best in the world. A restless perfectionist, Redzepi was at the top of his",
        createdBy: emma
<<<<<<< HEAD
        
      },{
        author: "Maggie Stiefvater",
        title: "Call Down the Hawk",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550860945l/31373184.jpg",
        releaseYear: 2019,
        genre: "Fantasy",
        pg: 472,
        ISBN: "1338188321",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07YV6G8TH",
      
        description:"The dreamers walk among us . . . and so do the dreamed. Those who dream cannot stop dreaming – they can only try to control it. Those who are dreamed cannot have their own lives – they will sleep forever if their dreamers die.",
        createdBy: emma
        
      },{
        author: "Sara Wolf ",
        title: "Find Me Their Bones",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558372949l/41085224.jpg",
        releaseYear: 2019,
        genre: "Fantasy",
        pg: 400,
        ISBN: "1640633758",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07K6D7LVD",
      
        description:"In order to protect Prince Lucien d’Malvane’s heart, Zera had to betray him. Now, he hates the sight of her. Trapped in Cavanos as a prisoner of the king, she awaits the inevitable moment her witch severs their magical connection and finally ends her life.",
        createdBy: emma
        
      },{
        author: "Renée Ahdieh",
        title: "The Beautiful",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547578763l/42265183.jpg",
        releaseYear: 2019,
        genre: "Fantasy",
        pg: 448,
        ISBN: "1524738174",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07THR7F9R",
      
        description:"In 1872, New Orleans is a city ruled by the dead. But to seventeen-year-old Celine Rousseau, New Orleans provides her a refuge after she's forced to flee her life as a dressmaker in Paris. Taken in by the sisters of the Ursuline convent along with six other girls, Celine quickly becomes enamored with the vibrant city from the music to the food to the soirées and—especially...",
        createdBy: emma
        
      },{
        author: "Elizabeth Hunter",
        title: "Night's Reckoning",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571622770l/47795122._SY475_.jpg",
        releaseYear: 2019,
        genre: "Fantasy",
        pg:368 ,
        ISBN: "B07Z9KMPCV",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07Z9KMPCV",
      
        description:"Darkness comes for everyone, and some fates are inescapable.For over a thousand years, the legendary sword Laylat al Hisab—the Night’s Reckoning—has been lost in the waters of the East China Sea. Forged as a peace offering between two ancient vampires, the sword has eluded treasure hunters, human and immortal alike.",
        createdBy: emma
        
      },{
        author: "Brian Naslund",
        title: "Blood of an Exile",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542063962l/41555916.jpg",
        releaseYear: 2019,
        genre: "Fantasy",
        pg: 416,
        ISBN: "0316251305",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NLDZ5GS",
      
        description:"Bershad stands apart from the world, the most legendary dragonslayer in history, both revered and reviled.Once, he was Lord Silas Bershad, but after a disastrous failure on the battlefield he was stripped of his titles and sentenced to one violent, perilous hunt after another. Now he lives only to stalk dragons, slaughter them, collect their precious oil, and head back",
        createdBy: emma
        
      },{
        author: "A.L. Jackson",
        title: "Hold on to Hope",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572268289l/48588509.jpg",
        releaseYear: 2019,
        genre: "Romance",
        pg: 419,
        ISBN: "B07ZMSW4G1",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZMSW4G1",
      
        description:"A best friends-to-lovers, stand-alone romance from New York Times Bestselling Author, A.L. Jackson . . .",
        createdBy: emma
        
      },{
        author: "Kandi Steiner",
        title: "On the Rocks",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559569726l/45916982._SY475_.jpg",
        releaseYear: 2019,
        genre: "Romance",
        pg: 340,
        ISBN: "107217670X",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07T255NZ4",
      
        description:"That's what Mama told me when I was a kid, kicking his pew in church and giggling at the games we’d play. It's what the town said when his father died and the Becker brothers went wild. And it's on repeat in my mind the day I walk into the whiskey distillery where he works to buy a wedding gift for my fiancé.",
        createdBy: emma
        
      },{
        author: "Adriana Locke",
        title: "Tangle",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555075597l/43237712.jpg",
        releaseYear: 2019,
        genre: "Romance",
        pg: 284,
        ISBN: "B07LB853QB",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07LB853QB",
      
        description:"Sparks fly between a die-hard romantic and a sexy cynic in this fresh, funny romance from USA Today bestselling author Adriana Locke.",
        createdBy: emma
        
      },{
        author: "Lauren Landish ",
        title: "My Big Fat Fake Wedding",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568648488l/48189120._SY475_.jpg",
        releaseYear: 2019,
        genre: "Romance",
        pg: 360,
        ISBN: "B07XY6MRLS",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07XY6MRLS",
      
        description:"He needs a wife.I need a husband.It’s just temporary… what could go wrong?",
        createdBy: emma
        
      },{
        author: "Jana Aston ",
        title: "The One Night Stand Before Christmas",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571343796l/48409935._SY475_.jpg",
        releaseYear: 2019,
        genre: "Romance",
        pg:358 ,
        ISBN: "B07ZV8YS68",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZV8YS68",
      
        description:"Dear Santa,/Please stop by my house and pick up your suit. If you thought I was going to run it to the dry cleaners for you after you left it on my bedroom floor, you’ve got another think coming./Best,//Noel Winter",
        createdBy: emma
        
      },
      {
        author: "Suzanne Collins",
        title: "The Hunger Games",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg",
        releaseYear: 2019,
        genre: "Adventure",
        pg: 374,
        ISBN: "0439023483",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KGC5WL9",
      
        description:"Could you survive on your own, in the wild, with everyone out to make sure you don't live to see the morning?In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages ...",
        createdBy: emma
        
      },
      {
        author: "Jim Butcher",
        title: "First Lord's Fury",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327903582l/6316821.jpg",
        releaseYear: 2019,
        genre: "Adventure",
        pg: 465,
        ISBN: "044101769X",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B003HV0TVE",
      
        description:"For Gaius Octavian, life has been one long battle. Now, the end of all he fought for is close at hand. The brutal, dreaded Vord are on the march against Alera. And perhaps for the final time, Gaius Octavian and his legions must stand against the enemies of his people. And it will take all his intelligence, ingenuity, and furycraft to save their world from eternal darkness.",
        createdBy: emma
        
      },
      {
        author: "Anthony Ryan ",
        title: "Tower Lord",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382486392l/18138189.jpg",
        releaseYear: 2019,
        genre: "Adventure",
        pg: 602,
        ISBN: "0425265625",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00FLY3VHY",
      
        description:"The blood-song rose with an unexpected tune, a warm hum mingling recognition with an impression of safety. He had a sense it was welcoming him home.Vaelin Al Sorna, warrior of the Sixth Order, called Darkblade, called Hope Killer. The greatest warrior of his day, and witness to the greatest defeat of his nation: King Janus’s vision of a Greater Unified Realm drowned in ",
        createdBy: emma
        
      },{
        author: "Brent Weeks",
        title: "The Broken Eye",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376583941l/12652457.jpg",
        releaseYear: 2019,
        genre: "Adventure",
        pg: 846,
        ISBN: "B00H25FCNG",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00GFHG33A",
      
        description:"As the old gods awaken, the Chromeria is in a race to find its lost Prism, the only man who may be able to stop catastrophe, Gavin Guile. But Gavin's enslaved on a galley, and when he finally escapes, he finds himself in less than friendly hands. Without the ability to draft which has defined him",
        createdBy: emma
        
      },
      {
        author: "Peter V. Brett",
        title: "The Desert Spear",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388219761l/6736971.jpg",
        releaseYear: 2019,
        genre: "Adventure",
        pg: 579,
        ISBN: "0345503813",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B003E7WJLE",
      
        description:"The sun is setting on humanity. The night now belongs to voracious demons that prey upon a dwindling population forced to cower behind half-forgotten symbols of power.Legends tell of a Deliverer: a general who once bound all mankind into a single force that defeated the demons. But is the return of the Deliverer just another myth? Perhaps not.",
        createdBy: emma
        
=======

>>>>>>> fae0d9df20a7fa1a0415e27ebe7033ac0b0be62d
      },

      ])
    })

    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })

})
