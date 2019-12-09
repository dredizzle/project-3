const mongoose = require('mongoose')
const { dbURI } = require('./config/environment')
const User = require('./models/User')
const Book = require('./models/Book')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([{
        username: 'seangray1',
        email: 'sean.myles.gray@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass'
      }, {
        username: 'gabelton',
        email: 'gabelton@gables.com',
        password: 'pass',
        passwordConfirmation: 'pass',
        image: 'https://i.imgur.com/aFoCicH.jpg'
      }, {
        username: 'eprice',
        email: 'ekprice01@gmail.com',
        password: 'pass',
        passwordConfirmation: 'pass',
        image: 'https://s1.r29static.com//bin/entry/9d4/x,80/2164076/taylor-swift-cant-stop-teasing-2164076.jpg'
      }])
    })
    .then(users => {
      const [sean, gabe, emma] = users
      return Book.create([{
        author: 'Oyinkan Braithwaite',
        title: 'My Sister, the Serial Killer',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523366732l/38819868._SY475_.jpg',
        releaseYear: 2018,
        genre: 'Mystery',
        pg: 226,
        ISBN: '0385544235',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07D7KJV13',
        description: "My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",
        createdBy: emma
      }, {
        author: 'Harlan Coben',
        title: 'Run Away',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533567545l/40697540.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 371,
        ISBN: '1538748460',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0791ZS353',
        description: "A perfect family is shattered in RUN AWAY, the new thriller from the master of domestic suspense, Harlan Coben.You've lost your daughter.She's addicted to drugs and to an abusive boyfriend. And she's made it clear that she doesn't want to be found.Then, by chance, you see her playing guitar in Central Park.But she's not the girl you remember. This woman is living on the edge, frightened, and clearly in trouble.You don't stop to think. You approach her, beg her to come home.She runs.And you do the only thing a parent can do: you follow her into a dark and dangerous world you never knew existed. Before you know it, both your family and your life are on the line. And in order to protect your daughter from the evils of that world, you must face them head on. ",
        createdBy: emma
      }, {
        author: 'Jane Harper',
        title: 'The Lost Man',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549469559l/39863488._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 340,
        ISBN: '1250105684',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DX23VP3',
        description: "Two brothers meet at the border of their vast cattle properties under the unrelenting sun of outback Queensland, in this stunning new standalone novel from New York Times bestseller Jane HarperThey are at the stockman’s grave, a landmark so old, no one can remember who is buried there. But today, the scant shadow it casts was the last hope for their middle brother, Cameron. The Bright family’s quiet existence is thrown into grief and anguish. Something had been troubling Cameron. Did he lose hope and walk to his death? Because if he didn’t, the isolation of the outback leaves few suspects…Dark, suspenseful, and deeply atmospheric, The Lost Man is the highly anticipated next book from the bestselling and award-winning Jane Harper, author of The Dry and Force of Nature",
        createdBy: emma
      }, {
        author: 'Greer Hendricks, Sarah Pekkanen',
        title: 'An Anonymous Girl',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546956642l/39863515._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 375,
        ISBN: '1250133734',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4',
        description: "The next novel of psychological suspense and obsession from the authors of the blockbuster bestseller The Wife Between Us. Seeking women ages 18–32 to participate in a study on ethics and morality. Generous compensation. Anonymity guaranteed.When Jessica Farris signs up for a psychology study conducted by the mysterious Dr. Shields, she thinks all she’ll have to do is answer a few questions, collect her money, and leave.Question #1: Could you tell a lie without feeling guilt? But as the questions grow more and more intense and invasive and the sessions become outings where Jess is told what to wear and how to act, she begins to feel as though Dr. Shields may know what she’s thinking… and what she’s hiding.As Jess’s paranoia grows, it becomes clear that she can no longer trust what in her life is real, and what is one of Dr. Shields’ manipulative experiments. Caught in a web of deceit and jealousy, Jess quickly learns that some obsessions can be deadly.",
        createdBy: emma

      }, {
        author: 'Sally Hepworth',
        title: 'The Mother-in-Law',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546452406l/39863405._SX318_.jpg',
        releaseYear: 2019,
        genre: 'Mystery',
        pg: 340,
        ISBN: '1250120926',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DGC1GWF',
        description: "Someone once told me that you have two families in your life - the one you are born into and the one you choose. Yes, you may get to choose your partner, but you don't choose your mother-in-law. The cackling mercenaries of fate determine it all.From the moment Lucy met Diana, she was kept at arm's length. Diana is exquisitely polite, but Lucy knows, even after marrying Oliver, that they'll never have the closeness she'd been hoping for.But who could fault Diana? She was a pillar of the community, an advocate for social justice, the matriarch of a loving family. Lucy had wanted so much to please her new mother-in-law.That was ten years ago. Now, Diana has been found dead, leaving a suicide note. But the autopsy reveals evidence of suffocation. And everyone in the family is hiding something.From the bestselling author of The Family Next Door comes a new page-turner about that trickiest of relationships.",
        createdBy: emma
      }, {
        author: 'Tamsyn Muir',
        title: 'Gideon the Ninth',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg',
        releaseYear: 2019,
        genre: 'ScienceFiction',
        pg: 448,
        ISBN: '1250313198',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J6HWLPR',
        description: "My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      }, {
        author: 'Rebecca Roanhorse',
        title: 'Resistance Reborn',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572828304l/45452530._SY475_.jpg',
        releaseYear: 2019,
        genre: 'ScienceFiction',
        pg: 295,
        ISBN: '0593128427',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07RDD92XD',
        description: "The heroes of the Resistance must fight back fro the edge of the oblivion in this pivotal prequel to Star Wars: The Rise of Skywalker.The Resistance is in ruins. In the wake of their harrowing escape from Crait, what was once an army has been reduced to a handful of wounded heroes. Finn, Poe, Rey, Rose, Chewbacca, Leia Organa -- their names are famous among the oppressed worlds they fight to liberate. But names can only get you so far, and Leia's last desperate call for aid has gone unanswered.From jungles of Ryloth to the shipyards of Corellia, the shadow of the First Order looms large, and those with the bravery to face the darkness are scattered and isolated. If hope is to survive, the Resistance must journey throughout the galaxy, seeking out more leaders - including those who, in days gone by, helped a nascent rebellion tripple an empire. Battles will be fought, alliances will be forged, and the Resistance will be reborn.",
        createdBy: emma

      },
      {
        author: 'Blake Crouch',
        title: 'Recursion',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543687940l/42046112.jpg',
        releaseYear: 2019,
        genre: 'ScienceFiction',
        pg: 336,
        ISBN: '1524759783',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07LCSPGTN',
        description: "That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.That's what neuroscientist Helena Smith believes. It’s why she’s dedicated her life to creating a technology that will let us preserve our most precious memories. If she succeeds, anyone will be able to re-experience a first kiss, the birth of a child, the final moment with a dying parent.As Barry searches for the truth, he comes face-to-face with an opponent more terrifying than any disease—a force that attacks not just our minds but the very fabric of the past. And as its effects begin to unmake the world as we know it, only he and Helena, working together, will stand a chance at defeating it.But how can they make a stand when reality itself is shifting and crumbling all around them?",
        createdBy: emma

      }, {
        author: 'Martin L. Shoemaker',
        title: 'The Last Dance',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562829205l/44067572.jpg',
        releaseYear: 2019,
        genre: 'ScienceFiction',
        pg: 464,
        ISBN: '1534439862',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KS83CGJ',
        description: "In space, mutiny means death—that’s why Inspector General Park Yerim is taking her investigation so seriously. The alleged mutineer is Captain Nicolau Aames, whose command of the massive Earth-Mars vessel Aldrin has come under fire. The vast System Initiative says he disobeyed orders, but his crew swears he’s in the right.",
        createdBy: emma

      }, {
        author: 'Neal Stephenson',
        title: 'Fall, Or Dodge in Hell',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548719156l/41824495._SY475_.jpg',
        releaseYear: 2019,
        genre: 'ScienceFiction',
        pg: 896,
        ISBN: '1534439862',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4',
        description: "Yetu holds the memories for her people—water-dwelling descendants of pregnant African slave women thrown overboard by slave owners—who live idyllic lives in the deep. Their past, too traumatic to be remembered regularly, is forgotten by everyone, save one—the historian. This demanding role has been bestowed on Yetu.Yetu remembers for everyone, and the memories, painful and wonderful, traumatic and terrible and miraculous, are destroying her. And so, she flees to the surface, escaping the memories, the expectations, and the responsibilities—and discovers a world her people left behind long ago.Yetu will learn more than she ever expected to about her own past—and about the future of her people. If they are all to survive, they’ll need to reclaim the memories, reclaim their identity—and own who they really are.",
        createdBy: emma

      }, {
        author: ' Jonathan Maberry ',
        title: 'Rage',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569295288l/43263146.jpg',
        releaseYear: 2019,
        genre: 'Horror',
        pg: 464,
        ISBN: '1250303575',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07P7BXMB4',
        description: "Rage is the first title in Jonathan Maberry's brand new Joe Ledger spin-off series of international weird science thrillers.A small island off the coast of Japan is torn apart by a bioweapon that drives everyone—men, women, and children—insane with murderous rage. The people behind that attack want Korea united or destroyed. No middle ground. No mercy. And they are willing to punish any country that stands in the way—the United States, China, and Japan could all be consumed by a plague of pure destructive slaughter.Joe Ledger leads his newly formed band of international troubleshooters in their first mission to stop the terror cell, fighting alongside agents from North and South Korea. With the lives of billions at stake, Ledger is willing to bring his own brand of terror to this frightening new war.Rage is the first of the new adventures of Joe Ledger and Rogue Team International.",
        createdBy: emma

      }, {
        author: ' Stephen King',
        title: 'Elevation',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542040067l/38355410._SX318_.jpg',
        releaseYear: 2018,
        genre: 'Horror',
        pg: 146,
        ISBN: '1982102314',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DNFC1C9',
        description: "Although Scott Carey doesn’t look any different, he’s been steadily losing weight. There are a couple of other odd things, too. He weighs the same in his clothes and out of them, no matter how heavy they are. Scott doesn’t want to be poked and prodded. He mostly just wants someone else to know, and he trusts Doctor Bob Ellis.",
        createdBy: emma

      },
      {
        author: 'Paul Tremblay ',
        title: 'The Cabin at the End of the World',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511884752l/36381091.jpg',
        releaseYear: 2018,
        genre: 'Horror',
        pg: 272,
        ISBN: '0062679104',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07F1X87BB',

        description: "The Bram Stoker Award-winning author of A Head Full of Ghosts adds an inventive twist to the home invasion horror story in a heart-palpitating novel of psychological suspense that recalls Stephen King’s Misery, Ruth Ware’s In a Dark, Dark Wood, and Jack Ketchum’s cult hit The Girl Next Door.Seven-year-old Wen and her parents, Eric and Andrew, are vacationing at a remote cabin on a quiet New Hampshire lake. Their closest neighbors are more than two miles in either direction along a rutted dirt road...",
        createdBy: emma

      },
      {
        author: 'Alma Katsu',
        title: 'The Hunger',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497803277l/30285766.jpg',
        releaseYear: 2018,
        genre: 'Horror',
        pg: 376,
        ISBN: '0735212511',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B071G7CSHP',
        description: "Tamsen Donner must be a witch. That is the only way to explain the series of misfortunes that have plagued the wagon train known as the Donner Party. Depleted rations, bitter quarrels, and the mysterious death of a little boy have driven the pioneers to the brink of madness. They cannot escape the feeling that someone--or something--is stalking them. Whether it was a curse from the beautiful Tamsen, the choice to follow a disastrous experimental route West, or just plain bad luck--the 90 men, women, and children of the Donner Party are at the brink of one of the deadliest and most disastrous western adventures in American history.While the ill-fated group struggles to survive in the treacherous mountain conditions--searing heat that turns the sand into bubbling stew; snows that freeze the oxen where they stand--evil begins to grow around them, and within them. As members of the party begin to disappear, they must ask themselves",
        createdBy: emma

      }, {
        author: 'Alison Littlewood',
        title: 'Mistletoe',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555411630l/43260175._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Horror',
        pg: 304,
        ISBN: '0735212517',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KFLNL7F',
        description: "Leah Hamilton is looking for a new life following the tragic deaths of her husband and son. Determined to bury her grief in hard work, and desperate to escape Christmas and the pitying looks of her colleagues, she rushes through the purchase of a run-down Yorkshire farmhouse, arriving just as the snow shrouds her new home.",
        createdBy: emma

      },
      {
        author: 'Americas Test Kitchen',
        title: 'The Side Dish Bible: 1001 Perfect Recipes for Every Vegetable, Rice, Grain, and Bean Dish You Will Ever Need',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573121632l/44291121._SX318_.jpg',
        releaseYear: 2019,
        genre: 'Cooking',
        pg: 574,
        ISBN: 'B07NKRJZ7X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NKRJZ7X',
        description: "A roadmap to help home cooks round out and enhance any meal, for any occasion with 1001 recipes for every type of side dish imaginable.Every cook struggles over making side dishes, from choosing what goes best with the main course to getting stuck in a rut making the same tired green beans and rice. But this destined-to-be-dog-ear'd compendium of side dishes changes all",
        createdBy: emma

      }, {
        author: 'The Good Place',
        title: 'Forking Good: A Cookbook Inspired',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1561637216l/46131607.jpg',
        releaseYear: 2019,
        genre: 'Cooking',
        pg: 160,
        ISBN: '9781683691556',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NKNX6RL',
        description: "A fun, lively, and fully illustrated cookbook of 30 original and practical recipes inspired by NBC's hit sitcom The Good Place, filled with the absurd, pun-driven food humor and accessible philosophy that makes the show so popular with fans.With its high concept, exceptional writing, eye-popping set design, stellar cast, meaningful explorations of what it means to be a..",
        createdBy: emma

      }, {
        author: 'Samin Nosrat',
        title: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475460859l/30753841._SX318_.jpg',
        releaseYear: 2019,
        genre: 'Cooking',
        pg: 480,
        ISBN: '1476753830',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01MQCCXPW',
        description: "A visionary new master class in cooking that distills decades of professional experience into just four simple elements, from the woman declared “America’s next great cooking teacher” by Alice Waters",
        createdBy: emma

      }, {
        author: 'Suzanne Lenzer',
        title: 'Graze: Inspiration for Small Plates and Meandering Meals',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492920730l/31450748._SX318_.jpg',
        releaseYear: 2017,
        genre: 'Cooking',
        pg: 205,
        ISBN: 'ISBN1623367530',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01MYZ3IPA',
        description: "Grazing is an enchanting way to eat. It means skipping from dish to dish, tasting different things without committing to a single one. It’s about creating multiple dishes that work together as a meal, that all share a theme, an aesthetic. When she entertains, or even pulls together a quick dinner for just two, food stylist Suzanne Lenzer enjoys this tapas-style of eating—",
        createdBy: emma

      }, {
        author: ' Yotam Ottolenghi, Helen Goh',
        title: 'Sweet',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510017230l/34063669._SX318_.jpg',
        releaseYear: 2017,
        genre: 'Cooking',
        pg: 368,
        ISBN: '1607749149',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07521VCHD',
        description: "In his stunning new baking and desserts cookbook Yotam Ottolenghi and his long-time collaborator Helen Goh bring the Ottolenghi hallmarks of fresh, evocative ingredients, exotic spices and complex flavourings - including fig, rose petal, saffron, aniseed, orange blossom, pistachio and cardamom - to indulgent cakes, biscuits, tarts, puddings, cheesecakes and ice cream.",
        createdBy: emma

      },
      {
        author: 'Catherine McCormack',
        title: 'The Art of Looking Up',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571688503l/43885165._SX318_.jpg',
        releaseYear: 2019,
        genre: 'Art',
        pg: 240,
        ISBN: '0711242178 ',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZWC2H86',
        description: "The Art of Looking Up surveys 40 spectacular ceilings around the globe that have been graced by the brushes of great artists including Michelangelo, Marc Chagall and Cy Twombly.From the floating women and lotus flowers of the Senso-ji Temple in Japan, to the religious iconography that adorns places of worship from Vienna to Istanbul, all the way to bold displays like the Chihuly glass flora suspended from the lobby of the Bellagio Hotel in Las Vegas: this book takes you on a tour of the extraordinary artworks that demand an alternative viewpoint.",
        createdBy: emma

      },
      {
        author: 'John Berger',
        title: 'Ways of Seeing',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1464018308l/2784._SY475_.jpg',
        releaseYear: 1990,
        genre: 'Art',
        pg: 176,
        ISBN: '0140135154',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B002ZJSV78',
        description: "John Berger's Ways of Seeing is one of the most stimulating and the most influential books on art in any language. First published in 1972, it was based on the BBC television series about which the (London) Sunday Times critic commented: 'This is an eye-opener in more ways than one: by concentrating on how we look at paintings ",
        createdBy: emma

      },
      {
        author: 'Leo Tolstoy, Aylmer Maude',
        title: 'What Is Art?',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1171944592l/127963._SY475_.jpg',
        releaseYear: 2000,
        genre: 'Art',
        pg: 252,
        ISBN: '0735102937',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00FVE9WMW',
        description: "During the decades of his world fame as sage & preacher as well as author of War & Peace & Anna Karenina, Tolstoy wrote prolifically in a series of essays & polemics on issues of morality, social justice & religion. These culminated in What is Art?, published in 1898. Although Tolstoy perceived the question of art to be a religious one, he considered...",
        createdBy: emma

      }, {
        author: 'David Airey',
        title: 'Logo Design Love: A Guide to Creating Iconic Brand Identities',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347407513l/6728983.jpg',
        releaseYear: 2011,
        genre: 'Art',
        pg: 216,
        ISBN: '0321660765',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00MTUNHDG',

        description: "There are a lot of books out there that show collections of logos. But David Airey’s “Logo Design Love” is something different: it’s a guide for designers (and clients) who want to understand what this mysterious business is all about. Written in reader-friendly, concise language, with a minimum of designer jargon, Airey gives a surprisingly clear explanation of the...",
        createdBy: emma

      }, {
        author: 'Emma Mills',
        title: 'First & Then',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1426513843l/23310751.jpg',
        releaseYear: 2019,
        genre: 'Art',
        pg: 272,
        ISBN: '162779235X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00V37BBJI',

        description: "Devon Tennyson wouldn't change a thing. She's happy watching Friday night games from the bleachers, silently crushing on best friend Cas, and blissfully ignoring the future after high school. But the universe has other plans. It delivers Devon's cousin Foster, an unrepentant social outlier with a surprising talent for football, and the obnoxiously superior and maddeningly...",
        createdBy: emma

      }, {
        author: 'Heather Morris ',
        title: 'The Tattooist of Auschwitz',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525962117l/38359036.jpg',
        releaseYear: 2018,
        genre: 'History',
        pg: 262,
        ISBN: '006287067X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B074CG2SGV',

        description: "In April 1942, Lale Sokolov, a Slovakian Jew, is forcibly transported to the concentration camps at Auschwitz-Birkenau. When his captors discover that he speaks several languages, he is put to work as a Tätowierer (the German word for tattooist), tasked with permanently marking his fellow prisoners.",
        createdBy: emma

      },
      {
        author: 'Stephen Fry',
        title: 'Mythos: The Greek Myths Retold',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502518360l/35074096._SY475_.jpg',
        releaseYear: 2017,
        genre: 'History',
        pg: 416,
        ISBN: '0718188721 ',
        preview: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502518360l/35074096._SY475_.jpg',

        description: "The Greek myths are the greatest stories ever told, passed down through millennia and inspiring writers and artists as varied as Shakespeare, Michelangelo, James Joyce and Walt Disney.They are embedded deeply in the traditions, tales and cultural DNA of the West. In Stephen Fry's hands the stories of the titans and gods become a brilliantly entertaining account of ribaldry",
        createdBy: emma

      }, {
        author: 'Alan Hlad',
        title: 'The Long Flight Home',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542021872l/42422509.jpg',
        releaseYear: 2019,
        genre: 'History',
        pg: 304,
        ISBN: '1496721675',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07N6DV2V5',

        description: "Inspired by fascinating, true, yet little-known events during World War II, The Long Flight Home is a testament to the power of courage in our darkest hours—a moving, masterfully written story of love and sacrifice.It is September 1940—a year into the war—and as German bombs fall on Britain, fears grow of an impending invasion. Enemy fighter planes blacken the sky around...",
        createdBy: emma

      }, {
        author: 'Georgia Hunter',
        title: 'We Were the Lucky Ones',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471282781l/30267929.jpg',
        releaseYear: 2017,
        genre: 'History',
        pg: 403,
        ISBN: '0399563083',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01M3TX4FQ',

        description: "It is the spring of 1939 and three generations of the Kurc family are doing their best to live normal lives, even as the shadow of war grows closer. The talk around the family Seder table is of new babies and budding romance, not of the increasing hardships threatening Jews in their hometown of Radom, Poland. But soon the horrors overtaking Europe will become inescapable ",
        createdBy: emma

      }, {
        author: 'Adam Higginbotham',
        title: 'Midnight in Chernobyl: The Untold Story of the Worlds Greatest Nuclear Disaster',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545577007l/40538681.jpg',
        releaseYear: 2019,
        genre: 'History',
        pg: 538,
        ISBN: '1501134612',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0741QVVPJ',

        description: "The definitive, dramatic untold story of the Chernobyl nuclear power plant disaster, based on original reporting and new archival research.April 25, 1986, in Chernobyl, was a turning point in world history. The disaster not only changed the world’s perception of nuclear power and the science that spawned it, but also our understanding of the planet’s delicate ecology...",
        createdBy: emma

      }, {
        author: 'Levison Wood',
        title: 'Walking the Americas',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478735694l/32934182._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Travel',
        pg: 304,
        ISBN: 'B01KTS4XSM',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01KTS4XSM',

        description: "'Levison Wood has breathed new life into adventure travel.' Michael Palin.Walking the Americas chronicles Levison Wood's 1,800 mile trek along the spine of the Americas, through eight countries, from Mexico to Colombia,",
        createdBy: emma

      }, {
        author: 'Levison Wood',
        title: 'Walking the Himalayas',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448830838l/27161842.jpg',
        releaseYear: 2015,
        genre: 'Travel',
        pg: 293,
        ISBN: '031635242X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B014DUSMCA',

        description: "Following his trek along the length of the Nile River, explorer Levison Wood takes on his greatest challenge yet-navigating the treacherous foothills of the Himalayas, the world's highest mountain range.Praised by Bear Grylls, Levison Wood has been called 'the toughest man on TV' (The Times UK). Now, following in the footsteps of the great explorers, Levison recounts the...",
        createdBy: emma

      }, {
        author: 'Adam Shoalts',
        title: 'Beyond the Trees: A Journey Alone Across Canadas Arctic',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565397926l/43671672.jpg',
        releaseYear: 2019,
        genre: 'Travel',
        pg: 288,
        ISBN: '0735236836',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07MMKL334',

        description: "In the spring of 2017, Adam Shoalts, bestselling author and adventurer, set off on an unprecedented solo journey across North America's greatest wilderness. A place where, in our increasingly interconnected, digital world, it's still possible to wander for",
        createdBy: emma

      }, {
        author: 'Jill Heinerth',
        title: 'Into the Planet: My Life as a Cave Diver',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563335080l/43131602.jpg',
        releaseYear: 2019,
        genre: 'Travel',
        pg: 288,
        ISBN: '0062691546',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07FGX37GZ',

        description: "From one of the world’s most renowned cave divers, a firsthand account of exploring the earth’s final frontier: the hidden depths of our oceans and the sunken caves inside our planet.More people have died exploring underwater caves than climbing Mount Everest, and we know more about deep space than we do about the depths of our oceans. From one of the top cave divers",
        createdBy: emma

      }, {
        author: 'Jeff Gordinier',
        title: 'Hungry: Eating, Road-Tripping, and Risking It All with the Greatest Chef in the World',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541419814l/42590641.jpg',
        releaseYear: 2019,
        genre: 'Travel',
        pg: 240,
        ISBN: '1524759643',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ST2L9GS',

        description: "Hungry is a book about not only the hunger for food, but for risk, for reinvention, for creative breakthroughs, and for connection. Feeling stuck in his work and home life, writer Jeff Gordinier happened into a fateful meeting with Danish chef Ren Redzepi, whose restaurant, Noma, has been called the best in the world. A restless perfectionist, Redzepi was at the top of his",
        createdBy: emma
        
      },{
        author: 'Maggie Stiefvater',
        title: 'Call Down the Hawk',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550860945l/31373184.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: 472,
        ISBN: '1338188321',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07YV6G8TH',
      
        description:"he dreamers walk among us . . . and so do the dreamed. Those who dream cannot stop dreaming – they can only try to control it. Those who are dreamed cannot have their own lives – they will sleep forever if their dreamers die.",
        createdBy: emma
        
      },{
        author: 'Sara Wolf ',
        title: 'Find Me Their Bones',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558372949l/41085224.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: 400,
        ISBN: '1640633758',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07K6D7LVD',
      
        description:"n order to protect Prince Lucien d’Malvane’s heart, Zera had to betray him. Now, he hates the sight of her. Trapped in Cavanos as a prisoner of the king, she awaits the inevitable moment her witch severs their magical connection and finally ends her life.",
        createdBy: emma
        
      },{
        author: 'Renée Ahdieh',
        title: 'The Beautiful',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547578763l/42265183.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: 448,
        ISBN: '1524738174',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07THR7F9R',
      
        description:"n 1872, New Orleans is a city ruled by the dead. But to seventeen-year-old Celine Rousseau, New Orleans provides her a refuge after she's forced to flee her life as a dressmaker in Paris. Taken in by the sisters of the Ursuline convent along with six other girls, Celine quickly becomes enamored with the vibrant city from the music to the food to the soirées and—especially...",
        createdBy: emma
        
      },{
        author: 'Elizabeth Hunter',
        title: 'Nights Reckoning',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571622770l/47795122._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg:368 ,
        ISBN: 'B07Z9KMPCV',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07Z9KMPCV',
      
        description: "arkness comes for everyone, and some fates are inescapable.For over a thousand years, the legendary sword Laylat al Hisab—the Night’s Reckoning—has been lost in the waters of the East China Sea. Forged as a peace offering between two ancient vampires, the sword has eluded treasure hunters, human and immortal alike.",
        createdBy: emma
        
      },{
        author: 'Brian Naslund',
        title: 'Blood of an Exile',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542063962l/41555916.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: 416,
        ISBN: '0316251305',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07NLDZ5GS',
      
        description:"ershad stands apart from the world, the most legendary dragonslayer in history, both revered and reviled.Once, he was Lord Silas Bershad, but after a disastrous failure on the battlefield he was stripped of his titles and sentenced to one violent, perilous hunt after another. Now he lives only to stalk dragons, slaughter them, collect their precious oil, and head back",
        createdBy: emma
        
      },{
        author: 'A.L. Jackson',
        title: 'Hold on to Hope',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572268289l/48588509.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: 419,
        ISBN: 'B07ZMSW4G1',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZMSW4G1',
      
        description:" best friends-to-lovers, stand-alone romance from New York Times Bestselling Author, A.L. Jackson . . .",
        createdBy: emma
        
      },{
        author: 'Kandi Steiner',
        title: 'On the Rocks',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559569726l/45916982._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: 340,
        ISBN: '107217670X',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07T255NZ4',
      
        description:"hat's what Mama told me when I was a kid, kicking his pew in church and giggling at the games we’d play. It's what the town said when his father died and the Becker brothers went wild. And it's on repeat in my mind the day I walk into the whiskey distillery where he works to buy a wedding gift for my fiancé.",
        createdBy: emma
        
      },{
        author: 'Adriana Locke',
        title: 'Tangle',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555075597l/43237712.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: 284,
        ISBN: 'B07LB853QB',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07LB853QB',
      
        description:"parks fly between a die-hard romantic and a sexy cynic in this fresh, funny romance from USA Today bestselling author Adriana Locke.",
        createdBy: emma
        
      },{
        author: 'Lauren Landish ',
        title: 'My Big Fat Fake Wedding',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568648488l/48189120._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: 360,
        ISBN: 'B07XY6MRLS',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07XY6MRLS',
      
        description:"e needs a wife.I need a husband.It’s just temporary… what could go wrong?",
        createdBy: emma
        
      },{
        author: 'Jana Aston ',
        title: 'The One Night Stand Before Christmas',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571343796l/48409935._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg:358 ,
        ISBN: 'B07ZV8YS68',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07ZV8YS68',
      
        description:"ear Santa,/Please stop by my house and pick up your suit. If you thought I was going to run it to the dry cleaners for you after you left it on my bedroom floor, you’ve got another think coming./Best,//Noel Winter",
        createdBy: emma
        
      },
      {
        author: 'Suzanne Collins',
        title: 'The Hunger Games',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: 374,
        ISBN: '0439023483',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KGC5WL9',
      
        description:"ould you survive on your own, in the wild, with everyone out to make sure you don't live to see the morning?In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages ...",
        createdBy: emma
        
      },
      {
        author: 'Jim Butcher',
        title: 'First Lords Fury',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327903582l/6316821.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: 465,
        ISBN: '044101769X',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B003HV0TVE',
      
        description:"or Gaius Octavian, life has been one long battle. Now, the end of all he fought for is close at hand. The brutal, dreaded Vord are on the march against Alera. And perhaps for the final time, Gaius Octavian and his legions must stand against the enemies of his people. And it will take all his intelligence, ingenuity, and furycraft to save their world from eternal darkness.",
        createdBy: emma
        
      },
      {
        author: 'Anthony Ryan ',
        title: 'Tower Lord',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1382486392l/18138189.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: 602,
        ISBN: '0425265625',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00FLY3VHY',
      
        description:"he blood-song rose with an unexpected tune, a warm hum mingling recognition with an impression of safety. He had a sense it was welcoming him home.Vaelin Al Sorna, warrior of the Sixth Order, called Darkblade, called Hope Killer. The greatest warrior of his day, and witness to the greatest defeat of his nation: King Janus’s vision of a Greater Unified Realm drowned in ",
        createdBy: emma
        
      },{
        author: 'Brent Weeks',
        title: 'The Broken Eye',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376583941l/12652457.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: 846,
        ISBN: 'B00H25FCNG',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00GFHG33A',
      
        description:"s the old gods awaken, the Chromeria is in a race to find its lost Prism, the only man who may be able to stop catastrophe, Gavin Guile. But Gavin's enslaved on a galley, and when he finally escapes, he finds himself in less than friendly hands. Without the ability to draft which has defined him",
        createdBy: emma
        
      },
      {
        author: 'Peter V. Brett',
        title: 'The Desert Spear',
        image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388219761l/6736971.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: 579,
        ISBN: '0345503813',
        preview:'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B003E7WJLE',
      
        description:"he sun is setting on humanity. The night now belongs to voracious demons that prey upon a dwindling population forced to cower behind half-forgotten symbols of power.Legends tell of a Deliverer: a general who once bound all mankind into a single force that defeated the demons. But is the return of the Deliverer just another myth? Perhaps not.",
        createdBy: emma
      },{
        author: 'Patricia Briggs',
        title: 'Storm Cursed',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1530631148l/40524748.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: '368',
        ISBN: '0425281299',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B010PIFNNA',
        descriotion: 'In this powerful entry in the #1 New York Times bestselling series, Mercy Thompson must face a deadly enemy to defend all she loves...My name is Mercedes Athena Thompson Hauptman, and I am a car mechanic. And a coyote shapeshifter. And the mate of the Alpha of the Columbia Basin werewolf pack. Even so, none of that would have gotten me into trouble if, a few months ago, I hadn\'t stood upon a bridge and taken responsibility for the safety of the citizens who lived in our territory. It seemed like the thing to do at the time. It should have only involved hunting down killer goblins, zombie goats, and an occasional troll. Instead, our home was viewed as neutral ground, a place where humans would feel safe to come and treat with the fae. The reality is that nothing and no one is safe. As generals and politicians face off with the Gray Lords of the fae, a storm is coming and her name is Death. But we are pack, and we have given our word. We will die to keep it.',
        createdBy: emma
      },{
        author: 'Samantha Shannon',
        title: 'The Priory of the Orange Tree',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528227872l/40381319.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: '827',
        ISBN: '9781408883433',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DFFQ2WQ',
        descriotion: 'A world divided. A queendom without an heir. An ancient enemy awakens. The House of Berethnet has ruled Inys for a thousand years. Still unwed, Queen Sabran the Ninth must conceive a daughter to protect her realm from destruction – but assassins are getting closer to her door. Ead Duryan is an outsider at court. Though she has risen to the position of lady-in-waiting, she is loyal to a hidden society of mages. Ead keeps a watchful eye on Sabran, secretly protecting her with forbidden magic. Across the dark sea, Tané has trained to be a dragonrider since she was a child, but is forced to make a choice that could see her life unravel. Meanwhile, the divided East and West refuse to parley, and forces of chaos are rising from their sleep.',
        createdBy: emma
      },{
        author: 'George R.R. Martin, Doug Wheatley',
        title: 'Fire & Blood',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532828095l/39943621.jpg',
        releaseYear: 2018,
        genre: 'Fantasy',
        pg: '719',
        ISBN: '152479628X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07CKHS8J1',
        descriotion: 'With all the fire and fury fans have come to expect from internationally bestselling author George R. R. Martin, this is the first volume of the definitive two-part history of the Targaryens in Westeros. Centuries before the events of A Game of Thrones, House Targaryen—the only family of dragonlords to survive the Doom of Valyria—took up residence on Dragonstone. Fire and Blood begins their tale with the legendary Aegon the Conqueror, creator of the Iron Throne, and goes on to recount the generations of Targaryens who fought to hold that iconic seat, all the way up to the civil war that nearly tore their dynasty apart. What really happened during the Dance of the Dragons? Why did it become so deadly to visit Valyria after the Doom? What is the origin of Daenerys’s three dragon eggs? These are but a few of the questions answered in this essential chronicle, as related by a learned maester of the Citadel and featuring more than eighty all-new black-and-white illustrations by artist Doug Wheatley. Readers have glimpsed small parts of this narrative in such volumes as The World of Ice & Fire, but now, for the first time, the full tapestry of Targaryen history is revealed. With all the scope and grandeur of Gibbon’s The History of the Decline and Fall of the Roman Empire, Fire and Blood is the ultimate game of thrones, giving readers a whole new appreciation for the dynamic, often bloody, and always fascinating history of Westeros.',
        createdBy: emma
      },{
        author: 'Marlon James',
        title: 'Black Leopard, Red Wolf',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1538656386l/40524312._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: '620',
        ISBN: '0735220174',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07F225SBW',
        descriotion: "In the first novel in Marlon James\'s Dark Star trilogy, myth, fantasy, and history come together to explore what happens when a mercenary is hired to find a missing child. Tracker is known far and wide for his skills as a hunter: \'He has a nose,\' people say. Engaged to track down a mysterious boy who disappeared three years earlier, Tracker breaks his own rule of always working alone when he finds himself part of a group that comes together to search for the boy. The band is a hodgepodge, full of unusual characters with secrets of their own, including a shape-shifting man-animal known as Leopard. Drawing from African history and mythology and his own rich imagination, Marlon James has written an adventure that's also an ambitious, involving read. Defying categorization and full of unforgettable characters, Black Leopard, Red Wolf explores the fundamentals of truths, the limits of power, the excesses of ambition, and our need to understand them all.",
        createdBy: emma
      },{
        author: 'Seanan McGuire',
        title: 'Middlegame',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537288490l/41893832.jpg',
        releaseYear: 2019,
        genre: 'Fantasy',
        pg: '528',
        ISBN: '1250195527',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07HF2ZK75',
        descriotion: 'Meet Roger. Skilled with words, languages come easily to him. He instinctively understands how the world works through the power of story. Meet Dodger, his twin. Numbers are her world, her obsession, her everything. All she understands, she does so through the power of math. Roger and Dodger aren’t exactly human, though they don’t realise it. They aren’t exactly gods, either. Not entirely. Not yet. Meet Reed, skilled in the alchemical arts like his progenitor before him. Reed created Dodger and her brother. He’s not their father. Not quite. But he has a plan: to raise the twins to the highest power, to ascend with them and claim their authority as his own. Godhood is attainable. Pray it isn’t attained.',
        createdBy: emma
      },{
        author: 'Sarah Harian ',
        title: 'Eight Will Fall',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550245322l/35827843._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: '352',
        ISBN: '1250196647',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07RKJYGSF',
        descriotion: 'In a land where magic is outlawed, eight criminals led by seventeen-year-old Larkin are sent on a mission to kill an ancient evil that plagues their kingdom. Descending into an underground realm full of unspeakable horrors, Larkin and her party must use their forbidden magic to survive what lies in wait, teeth sharp and jaws deadly. As she fights for her life, Larkin finds a light in Amias, a fellow outlaw with a notorious past. Soon Larkin and Amias realize their fates are entwined. The eight of them were chosen for a reason. But as the dangers multiply and her band of felons are picked off one by one, Larkin must confront a terrible truth: They were never meant to return.',
        createdBy: emma
      },{
        author: 'Eoin Colfer',
        title: 'The Fowl Twins',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556827623l/39816061._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: ' 368 ',
        ISBN: '0008324816',
        preview: 'https://www.goodreads.com/book/show/39816061-the-fowl-twins',
        descriotion: 'Criminal genius runs in the family...Myles and Beckett are eleven-year-old twins, but the two boys are wildly different. Beckett is blonde, messy and sulks whenever he has to wear clothes. Myles is fanatically neat, he has an IQ of 170, and he wears a fresh suit every day like his older brother, Artemis Fowl. Perhaps you have heard of the Fowl family and their adventures? This Fowl adventure is filled with the most unusual of individuals: an immortal duke, a miniature troll, a nunterrogator and a Police Specialist that\'s 42% elf. And of course, the Fowl twins - one a certified genius with a criminal leaning, and the other possessing an unusual talent that has not been fully explored... yet! Here begins the second documented cycle of Fowl Adventures. The first in a breath-taking new series from global superstar Eoin Colfer. Set in the multi-million bestselling world of ARTEMIS FOWL.',
        createdBy: emma
      },{
        author: 'Elizabeth Hunter',
        title: 'Nights Reckoning',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571622770l/47795122._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: '390',
        ISBN: '9781941674475',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07Z9KMPCV',
        descriotion: 'Darkness comes for everyone, and some fates are inescapable. For over a thousand years, the legendary sword Laylat al Hisab—the Night’s Reckoning—has been lost in the waters of the East China Sea. Forged as a peace offering between two ancient vampires, the sword has eluded treasure hunters, human and immortal alike. But in time, even the deep gives up its secrets. When Tenzin’s sire hears about the eighth century shipwreck found off the coast of southern China, Zhang realizes he’ll need the help of an upstart pirate from Shanghai to retrieve it. And since that pirate has no desire to be in the middle of an ancient war, Cheng calls the only allies who might be able to help him avoid it. Unfortunately, Tenzin is on one side of the globe and Ben is on the other. Tenzin knows she’ll need Ben’s keen mind and political skills to complete the job. She also knows gaining Ben’s cooperation won’t be an easy task. She’ll have to drag him back into the darkness he’s been avoiding. Whether Ben knows it or not, his fate is balanced on the edge of a thousand-year-old blade, and one stumble could break everything Tenzin has worked toward. Night’s Reckoning is the third novel in the Elemental Legacy series, a paranormal mystery by Elizabeth Hunter, USA Today bestselling author of the Elemental Mysteries.',
        createdBy: emma
      },{
        author: 'Melinda Leigh',
        title: 'Save Your Breath',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544630671l/41196516._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Adventure',
        pg: '314',
        ISBN: '1542092833',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GK5736Z',
        descriotion: 'Morgan Dane and PI Lance Kruger investigate the mysterious disappearance of a true-crime writer. When true-crime writer Olivia Cruz disappears with no signs of foul play, her new boyfriend, Lincoln Sharp, suspects the worst. He knows she didn’t leave willingly and turns to attorney Morgan Dane and PI Lance Kruger to find her before it’s too late. As they dig through Olivia’s life, they are shocked to discover a connection between her current book research on two cold murder cases and the suicide of one of Morgan’s prospective clients. As Morgan and Lance investigate, the number of suspects grows, but time is running out to find Olivia alive. When danger comes knocking at their door, Morgan and Lance realize that they may be the killer’s next targets.',
        createdBy: emma
      },{
        author: 'Philip Pullman',
        title: 'La Belle Sauvage',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498930382l/34128219.jpg',
        releaseYear: 2017,
        genre: 'Adventure',
        pg: '449',
        ISBN: '0375815309',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01N5URPMC',
        descriotion: 'Malcolm Polstead is the kind of boy who notices everything but is not much noticed himself. And so perhaps it was inevitable that he would become a spy...Malcolm\'s father runs an inn called the Trout, on the banks of the river Thames, and all of Oxford passes through its doors. Malcolm and his dæmon, Asta, routinely overhear news and gossip, and the occasional scandal, but during a winter of unceasing rain, Malcolm catches wind of something new: intrigue. He finds a secret message inquiring about a dangerous substance called Dust--and the spy it was intended for finds him. When she asks Malcolm to keep his eyes open, Malcolm sees suspicious characters everywhere; Lord Asriel, clearly on the run; enforcement agents from the Magisterium; an Egyptian named Coram with warnings just for Malcolm; and a beautiful woman with an evil monkey for a dæmon. All are asking about the same thing: a girl--just a baby--named Lyra. Lyra is the kind of person who draws people in like magnets. And Malcolm will brave any danger, and make shocking sacrifices, to bring her safely through the storm.',
        createdBy: emma
      },{
        author: 'L.J. Shen',
        title: 'The Kiss Thief',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544101164l/41450662._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '320',
        ISBN: '1793307504',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07MLR5WY6',
        descriotion: 'They say your first kiss should be earned. Mine was stolen by a devil in a masquerade mask under the black Chicago sky. They say the vows you take on your wedding day are sacred. Mine were broken before we left church. They say your heart only beats for one man. Mine split and bled for two rivals who fought for it until the bitter end. I was promised to Angelo Bandini, the heir to one of the most powerful families in the Chicago Outfit. Then taken by Senator Wolfe Keaton, who held my father’s sins over his head to force me into marriage. They say that all great love stories have a happy ending. I, Francesca Rossi, found myself erasing and rewriting mine until the very last chapter. One kiss. Two men. Three lives. Entwined together. And somewhere between these two men, I had to find my forever.',
        createdBy: emma
      },{
        author: 'Beth OLeary',
        title: 'The Flatshare',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539959222l/41150287._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '325',
        ISBN: '1250223598',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DCZ7LM4',
        descriotion: 'Tiffy Moore and Leon Twomey each have a problem and need a quick fix. Tiffy’s been dumped by her cheating boyfriend and urgently needs a new flat. But earning minimum wage at a quirky publishing house means that her choices are limited in London. Leon, a palliative care nurse, is more concerned with other people’s welfare than his own. Along with working night shifts looking after the terminally ill, his sole focus is on raising money to fight his brother’s unfair imprisonment. Leon has a flat that he only uses 9 to 5. Tiffy works 9 to 5 and needs a place to sleep. The solution to their problems? To share a bed of course...As Leon and Tiffy’s unusual arrangement becomes a reality, they start to connect through Post-It notes left for each other around the flat. Can true love blossom even in the unlikeliest of situations. Can true love blossom even if you never see one another? Or does true love blossom when you are least expecting it?',
        createdBy: emma
      },{
        author: 'Katherine Center',
        title: 'Things You Save in a Fire',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539876418l/41150382.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '320',
        ISBN: '1250047323',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J4WHC78',
        descriotion: "Cassie Hanwell was born for emergencies. As one of the only female firefighters in her Texas firehouse, she's seen her fair share of them, and she's excellent at dealing with other people's tragedies. But when her estranged and ailing mother asks her to uproot her life and move to Boston, it's an emergency of a kind Cassie never anticipated. The tough, old-school Boston firehouse is as different from Cassie's old job as it could possibly be. Hazing, a lack of funding, and poor facilities mean that the firemen aren't exactly thrilled to have a 'lady' on the crew, even one as competent and smart as Cassie. Except for the handsome rookie, who doesn't seem to mind having Cassie around. But she can't think about that. Because she doesn't fall in love. And because of the advice her old captain gave her: don't date firefighters. Cassie can feel her resolve slipping...but will she jeopardize her place in a career where she's worked so hard to be taken seriously? Katherine Center's Things You Save in a Fire is a heartfelt, affecting novel about life, love, and the true meaning of courage.",
        createdBy: emma
      },{
        author: 'Tracey Garvis Graves',
        title: 'The Girl He Used to Know',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527367695l/36117813.jpg',
        releaseYear: 2019,
        genre: 'Romance', 
        pg: '291',
        ISBN: '1250200350',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J45JR61',
        descriotion: "What if you had a second chance at first love. Annika Rose likes being alone. She feels lost in social situations, saying the wrong thing or acting the wrong way. She just can't read people. She prefers the quiet solitude of books or playing chess to being around others. Apart from Jonathan. She liked being around him, but she hasn't seen him for ten years. Until now that is. And she'll not sure he'll want to see her again after what happened all those years ago. Annika Rose likes being alone.Except that, actually, she doesn't like being alone at all. The Girl He Used to Know is an uplifting novel full of surprising revelations that keep you turning the page. Perfect for fans of Jojo Moyes, Gail Honeyman, Jill Santopolo and Sliding Doors.",
        createdBy: emma
      },{
        author: 'Colleen Hoover',
        title: 'Verity',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544723401l/43225180._SY475_.jpg',
        releaseYear: 2018,
        genre: 'Romance',
        pg: '314',
        ISBN: '1791392792',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07HJYTRMD',
        descriotion: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of what really happened the day her daughter died. Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents would devastate the already grieving father. But as Lowen's feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife's words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue to love her. A standalone romantic thriller from #1 New York Times bestselling author Colleen Hoover, releasing December 18th.",
        createdBy: emma
      },{
        author: 'Casey McQuiston',
        title: 'Red, White & Royal Blue',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566742321l/47904396._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '423',
        ISBN: '01250316774',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J4LPZRN',
        descriotion: "A big-hearted romantic comedy in which the First Son falls in love with the Prince of Wales after an incident of international proportions forces them to pretend to be best friends...First Son Alex Claremont-Diaz is the closest thing to a prince this side of the Atlantic. With his intrepid sister and the Veep’s genius granddaughter, they’re the White House Trio, a beautiful millennial marketing strategy for his mother, President Ellen Claremont. International socialite duties do have downsides—namely, when photos of a confrontation with his longtime nemesis Prince Henry at a royal wedding leak to the tabloids and threaten American/British relations. The plan for damage control: staging a fake friendship between the First Son and the Prince. Alex is busy enough handling his mother’s bloodthirsty opponents and his own political ambitions without an uptight royal slowing him down. But beneath Henry’s Prince Charming veneer, there’s a soft-hearted eccentric with a dry sense of humor and more than one ghost haunting him. As President Claremont kicks off her reelection bid, Alex finds himself hurtling into a secret relationship with Henry that could derail the campaign and upend two nations. And Henry throws everything into question for Alex, an impulsive, charming guy who thought he knew everything: What is worth the sacrifice? How do you do all the good you can do? And, most importantly, how will history remember you?",
        createdBy: emma
      }, {
        author: 'J.R. Ward ',
        title: 'The Savior',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541952588l/42101728.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '479',
        ISBN: '1501194941',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KFJVVDM',
        descriotion: "In the venerable history of the Black Dagger Brotherhood, only one male has ever been expelled—but Murhder’s insanity gave the Brothers no choice. Haunted by visions of a female he could not save, he nonetheless returns to Caldwell on a mission to right the wrong that ruined him. However, he is not prepared for what he must face in his quest for redemption. Dr. Sarah Watkins, researcher at a biomedical firm, is struggling with the loss of her fellow scientist fiancé. When the FBI starts asking about his death, she questions what really happened and soon learns the terrible truth: Her firm is conducting inhumane experiments in secret and the man she thought she knew and loved was involved in the torture. As Murhder and Sarah’s destinies become irrevocably entwined, desire ignites between them. But can they forge a future that spans the divide separating the two species? And as a new foe emerges in the war against the vampires, will Murhder return to his Brothers... or resume his lonely existence forevermore?",
        createdBy: emma
      },{
        author: 'Christina Lauren ',
        title: 'The Unhoneymooners',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566937798l/47946089._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '400',
        ISBN: '1501128035',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07MQSNMQ1',
        descriotion: "For two sworn enemies, anything can happen during the Hawaiian trip of a lifetime . . .Olive is always unlucky; her identical twin sister Amy, on the other hand, is probably the luckiest person in the world. About to marry her dream man, her entire wedding has been fully paid for by winning a series of competitions. Meanwhile, Olive is forced to play nice with her sworn enemy: the best man, Ethan. But Olive's luck may be on the turn . . . When the entire wedding party - except for Olive and Ethan - gets food poisoning, there's an all-expenses-paid honeymoon in Hawaii up for grabs. Putting their mutual hatred aside for the sake of a free holiday, Olive and Ethan head for paradise, determined to avoid each other at all costs. But when Olive runs into her future boss, the little white lie she tells him threatens to spiral out of control. Forced to play loving newlyweds, she and Ethan find themselves in much closer proximity than they ever expected . . . The problem is that soon, Olive finds that maybe she doesn't mind pretending. In fact, she's beginning to feel kind of . . . lucky. The Unhoneymooners is a heartwarming and hilarious romance perfect for anyone who has ever felt unlucky in love. Praise for Christina Lauren",
        createdBy: emma
      },{
        author: 'L.J. Shen',
        title: 'Pretty Reckless',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498930382l/34128219.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '360',
        ISBN: '1095447416',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07R9PNH9F',
        descriotion: 'They say revenge is a dish best served cold. I’d had four years to stew on what Daria Followhill did to me, and now my heart was completely iced. I took her first kiss.She took the only thing I loved. I was poor. She was rich. The good thing about circumstances? They can change. Fast. Now, I’m her parents’ latest shiny project. Her housemate. Her tormentor. The captain of the rival football team she hates so much.Yeah, baby girl, say it—I’m your foster brother. There’s a price to pay for ruining the only good thing in my life, and she’s about to shell out some serious tears. Daria Followhill thinks she is THE queen. I’m about to prove to her that she’s nothing but a spoiled princess. Daria, Everyone loves a good old unapologetic punk. But being a bitch? Oh, you get slammed for every snarky comment, cynical eye roll, and foot you put in your adversaries’ way.The thing about stiletto heels is that they make a hell of a dent when you walk all over the people who try to hurt you. In Penn Scully’s case, I pierced his heart until he bled out, then left it in a trash can on a bright summer day. Four years ago, he asked me to save all my firsts for him. Now he lives across the hall, and I want nothing more than to be his last everything. His parting words when he gave me his heart were that nothing in this world is free. Now? Now he is making me pay.',
        createdBy: emma
      },{
        author: 'Tessa Bailey',
        title: 'Fix Her Up',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1541001833l/39854434.jpg',
        releaseYear: 2019,
        genre: 'Romance',
        pg: '400',
        ISBN: '0062872842',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07C1XR6BK',
        descriotion: 'New York Times bestseller Tessa Bailey launches a super sexy new series featuring the blue collar men who work for a HGTV-esq house flipping business. After an injury ends Travis Ford’s major league baseball career, he returns home to start over. He just wants to hammer out his frustrations at his new construction gig and forget all about his glory days. But he can’t even walk through town without someone recapping his greatest hits. Or making a joke about his… bat. And then there’s Georgie, his buddy’s little sister, who is definitely not a kid anymore. Georgette Castle has crushed on her older brother’s best friend for years. The grumpy, bear of a man working for her family’s house flipping business is a far cry from the charming sports star she used to know. But a moody scowl doesn’t scare her and Georgie’s determined to show Travis he’s more than a pretty face and a batting average, even if it means putting her feelings aside to be “just friends.” Travis wants to brood in peace. But the girl he used to tease is now a funny, full-of-life woman who makes him feel whole again. And he wants her. So damn bad. Except Georgie’s off limits and he knows he can’t give her what she deserves. But she’s becoming the air he breathes and Travis can’t stay away, no matter how hard he tries...',
        createdBy: emma
      },{
        author: 'Sun Tzu, Thomas Cleary',
        title: 'The Art of War',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453417993l/10534._SY475_.jpg',
        releaseYear: 2005,
        genre: 'Art',
        pg: '273',
        ISBN: '1590302257',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00DC6Q30U',
        descriotion: 'Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life. The Art of War is a book which should be used to gain advantage of opponents in the boardroom and battlefield alike.',
        createdBy: emma
      },{
        author: 'Yasmina Reza',
        title: 'Arte',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403089231l/79755.jpg',
        releaseYear: 1999,
        genre: 'Art',
        pg: '104',
        ISBN: '8433908936',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B01N5O532I',
        descriotion: "Sergio has bought a modern painting for a large sum of money. Marcos hates him and cannot believe that a friend of his likes a similar work. Ivan tries unsuccessfully to appease the two sides. If your friendship is based on a tacit mutual agreement, what happens when a person does something completely different and unexpected? The question is: are you who you think you are or are who your friends think you are. This dazzling comedy by Yasmina Reza premiered in Paris at the Comédie des Champs-Elysées in October 1994 where he remained 18 months; in Berlin at the Theater of the Schaubühne in October 1995; in London at the Wyndham's Theater in October 1996; in New York at the Royal Theater in March 1998 and lately in Madrid at the Marquina Theater, with an address of José María Flotats, in September 1998, winner of the Max awards and the most prestigious Spanish awards.",
        createdBy: emma
      },{
        author: 'Austin Kleon',
        title: 'Steal Like an Artist: 10 Things Nobody Told You About Being Creative',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404576602l/13099738.jpg',
        releaseYear: 2012,
        genre: 'Art',
        pg: '160 ',
        ISBN: '0761169253',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0074QGGK6',
        descriotion: "You don’t need to be a genius, you just need to be yourself. That’s the message from Austin Kleon, a young writer and artist who knows that creativity is everywhere, creativity is for everyone. A manifesto for the digital age, Steal Like an Artist is a guide whose positive message, graphic look and illustrations, exercises, and examples will put readers directly in touch with their artistic side.",
        createdBy: emma
      },{
        author: 'David Bayles, Ted Orland',
        title: 'Art and Fear: Observations on the Perils (and Rewards) of Artmaking',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442712080l/187633._SY475_.jpg',
        releaseYear: 2001,
        genre: 'Art',
        pg: '122',
        ISBN: '0961454733',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0042JSQLU',
        descriotion: "This is a book about making art. Ordinary art. Ordinary art means something like: all art not made by Mozart. After all, art is rarely made by Mozart-like people; essentially-statistically speaking-there aren't any people like that. Geniuses get made once-a-century or so, yet good art gets made all the time, so to equate the making of art with the workings of genius removes this intimately human activity to a strangely unreachable and unknowable place. For all practical purposes making art can be examined in great detail without ever getting entangled in the very remote problems of genius. From the Introduction",
        createdBy: emma
      },{
        author: 'Erich Fromm, Peter D. Kramer',
        title: 'The Art of Loving',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438550243l/14142._SY475_.jpg',
        releaseYear: 2019,
        genre: 'Art',
        pg: '192',
        ISBN: '0061129739',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00BBPWAJC',
        descriotion: "The fiftieth Anniversary Edition of the groundbreaking international bestseller that has shown millions of readers how to achieve rich, productive lives by developing their hidden capacities for love. Most people are unable to love on the only level that truly matters: love that is compounded of maturity, self-knowledge, and courage. As with every art, love demands practice and concentration, as well as genuine insight and understanding. In his classic work, The Art of Loving, renowned psychoanalyst and social philosopher Erich Fromm explores love in all its aspects—not only romantic love, steeped in false conceptions and lofty expectations, but also brotherly love, erotic love, self-love, the love of God, and the love of parents for their children.",
        createdBy: emma
      },{
        author: 'Dalai Lama XIV, Howard C. Cutler',
        title: 'The Art of Happiness',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309287434l/38210.jpg',
        releaseYear: 1998,
        genre: 'Art',
        pg: '336',
        ISBN: '1573221112',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0043VDI6A',
        descriotion: "Nearly every time you see him, he's laughing, or at least smiling. And he makes everyone else around him feel like smiling. He's the Dalai Lama, the spiritual and temporal leader of Tibet, a Nobel Prize winner, and an increasingly popular speaker and statesman. What's more, he'll tell you that happiness is the purpose of life, and that 'the very motion of our life is towards happiness.' How to get there has always been the question. He's tried to answer it before, but he's never had the help of a psychiatrist to get the message across in a context we can easily understand. Through conversations, stories, and meditations, the Dalai Lama shows us how to defeat day-to-day anxiety, insecurity, anger, and discouragement. Together with Dr. Cutler, he explores many facets of everyday life, including relationships, loss, and the pursuit of wealth, to illustrate how to ride through life's obstacles on a deep and abiding source of inner peace. ",
        createdBy: emma
      },{
        author: 'Mark Manson',
        title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1480903131l/29965800.jpg',
        releaseYear: 2016,
        genre: 'Art',
        pg: '229',
        ISBN: '0062641549',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B019MMUA8S',
        descriotion: "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking is the key to a happy, rich life. 'F**k positivity,' Mark Manson says. 'Let’s be honest, shit is f**ked and we have to live with it.' In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up. Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—'not everybody can be extraordinary, there are winners and losers in society, and some of it is not fair or your fault.' Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults, and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity, and forgiveness we seek. There are only so many things we can give a f**k about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience. A much-needed grab-you-by-the-shoulders-and-look-you-in-the-eye moment of real-talk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a refreshing slap for a generation to help them lead contented, grounded lives.",
        createdBy: emma
      },{
        author: 'B.A. Shapiro',
        title: 'The Art Forger',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348518546l/14568987.jpg',
        releaseYear: 2012,
        genre: 'Art',
        pg: '360',
        ISBN: '1616201320',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00AFKISKO',
        descriotion: "On March 18, 1990, thirteen works of art worth today over $500 million were stolen from the Isabella Stewart Gardner Museum in Boston. It remains the largest unsolved art heist in history, and Claire Roth, a struggling young artist, is about to discover that there’s more to this crime than meets the eye. Claire makes her living reproducing famous works of art for a popular online retailer. Desperate to improve her situation, she lets herself be lured into a Faustian bargain with Aiden Markel, a powerful gallery owner. She agrees to forge a painting—one of the Degas masterpieces stolen from the Gardner Museum—in exchange for a one-woman show in his renowned gallery. But when the long-missing Degas painting—the one that had been hanging for one hundred years at the Gardner—is delivered to Claire’s studio, she begins to suspect that it may itself be a forgery. Claire’s search for the truth about the painting’s origins leads her into a labyrinth of deceit where secrets hidden since the late nineteenth century may be the only evidence that can now save her life. B. A. Shapiro’s razor-sharp writing and rich plot twists make The Art Forger an absorbing literary thriller that treats us to three centuries of forgers, art thieves, and obsessive collectors. it’s a dazzling novel about seeing—and not seeing—the secrets that lie beneath the canvas.",
        createdBy: emma
      },{
        author: 'Chad Harbach ',
        title: 'The Art of Fielding',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554025214l/10996342._SY475_.jpg',
        releaseYear: 2011,
        genre: 'Art',
        pg: '512 ',
        ISBN: '0316126691',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B005E89IJW',
        descriotion: "At Westish College, a small school on the shore of Lake Michigan, baseball star Henry Skrimshander seems destined for big league stardom. But when a routine throw goes disastrously off course, the fates of five people are upended. Henry's fight against self-doubt threatens to ruin his future. College president Guert Affenlight, a longtime bachelor, has fallen unexpectedly and helplessly in love. Owen Dunne, Henry's gay roommate and teammate, becomes caught up in a dangerous affair. Mike Schwartz, the Harpooners' team captain and Henry's best friend, realizes he has guided Henry's career at the expense of his own. And Pella Affenlight, Guert's daughter, returns to Westish after escaping an ill-fated marriage, determined to start a new life. As the season counts down to its climactic final game, these five are forced to confront their deepest hopes, anxieties, and secrets. In the process they forge new bonds, and help one another find their true paths. Written with boundless intelligence and filled with the tenderness of youth, The Art of Fielding is an expansive, warmhearted novel about ambition and its limits, about family and friendship and love, and about commitment - to oneself and to others.",
        createdBy: emma
      },{
        author: 'Yuval Noah Harari',
        title: 'Sapiens: A Brief History of Humankind',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427636442l/23198201.jpg',
        releaseYear: 2014,
        genre: 'History',
        pg: '466',
        ISBN: '0062316095',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00K7ED54M',
        descriotion: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come? Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.",
        createdBy: emma
      },{
        author: 'Donna Tartt',
        title: 'The Secret History',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451554846l/29044.jpg',
        releaseYear: 2004,
        genre: 'History',
        pg: '559',
        ISBN: '1400031702',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00CEGTVGC',
        descriotion: "Under the influence of their charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality they slip gradually from obsession to corruption and betrayal, and at last - inexorably - into evil.",
        createdBy: emma
      },{
        author: 'Bill Bryson',
        title: 'A Short History of Nearly Everything',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433086293l/21._SY475_.jpg',
        releaseYear: 2004,
        genre: 'History',
        pg: '544',
        ISBN: '076790818X',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0035OC7VI',
        descriotion: "In Bryson's biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves. Taking as territory everything from the Big Bang to the rise of civilization, Bryson seeks to understand how we got from there being nothing at all to there being us. To that end, he has attached himself to a host of the world’s most advanced (and often obsessed) archaeologists, anthropologists, and mathematicians, travelling to their offices, laboratories, and field camps. He has read (or tried to read) their books, pestered them with questions, apprenticed himself to their powerful minds. A Short History of Nearly Everything is the record of this quest, and it is a sometimes profound, sometimes funny, and always supremely clear and entertaining adventure in the realms of human knowledge, as only Bill Bryson can render it. Science has never been more involving or entertaining.",
        createdBy: emma
      },{
        author: ' Max Brooks',
        title: 'World War Z: An Oral History of the Zombie War',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528312647l/8908._SX318_.jpg',
        releaseYear: 2006,
        genre: 'History',
        pg: '342',
        ISBN: '0307346609',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07H2LC5ZR',
        descriotion: "The Zombie War came unthinkably close to eradicating humanity. Max Brooks, driven by the urgency of preserving the acid-etched first-hand experiences of the survivors from those apocalyptic years, traveled across the United States of America and throughout the world, from decimated cities that once teemed with upwards of thirty million souls to the most remote and inhospitable areas of the planet. He recorded the testimony of men, women, and sometimes children who came face-to-face with the living, or at least the undead, hell of that dreadful time. World War Z is the result. Never before have we had access to a document that so powerfully conveys the depth of fear and horror, and also the ineradicable spirit of resistance, that gripped human society through the plague years. Ranging from the now infamous village of New Dachang in the United Federation of China, where the epidemiological trail began with the twelve-year-old Patient Zero, to the unnamed northern forests where untold numbers sought a terrible and temporary refuge in the cold, to the United States of Southern Africa, where the Redeker Plan provided hope for humanity at an unspeakable price, to the west-of-the-Rockies redoubt where the North American tide finally started to turn, this invaluable chronicle reflects the full scope and duration of the Zombie War. Most of all, the book captures with haunting immediacy the human dimension of this epochal event. Facing the often raw and vivid nature of these personal accounts requires a degree of courage on the part of the reader, but the effort is invaluable because, as Mr. Brooks says in his introduction, 'By excluding the human factor, aren't we risking the kind of personal detachment from history that may, heaven forbid, lead us one day to repeat it? And in the end, isn't the human factor the only true difference between us and the enemy we now refer to as 'the living dead. Note: Some of the numerical and factual material contained in this edition was previously published under the auspices of the United Nations Postwar Commission.",
        createdBy: emma
      },{
        author: 'Howard Zinn',
        title: 'A Peoples History of the United States',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1494279423l/2767._SY475_.jpg',
        releaseYear: 2005,
        genre: 'History',
        pg: ' 729',
        ISBN: '0060838655',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B00O2YH8EQ',
        descriotion: "Library Journal calls Howard Zinn’s iconic A People's History of the United States “a brilliant and moving history of the American people from the point of view of those…whose plight has been largely omitted from most histories.” Packed with vivid details and telling quotations, Zinn’s award-winning classic continues to revolutionize the way American history is taught and remembered. Frequent appearances in popular media such as The Sopranos, The Simpsons, Good Will Hunting, and the History Channel documentary The People Speak testify to Zinn’s ability to bridge the generation gap with enduring insights into the birth, development, and destiny of the nation",
        createdBy: emma
      },{
        author: 'Herodotus, Aubrey de Sélincourt (Translator), John M. Marincola',
        title: 'The Histories',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1399225547l/1362.jpg',
        releaseYear: 2003,
        genre: 'History',
        pg: '716',
        ISBN: '140449086',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B003AYZBMA',
        descriotion: "One of the masterpieces of classical literature, the 'Histories' describes how a small and quarrelsome band of Greek city states united to repel the might of the Persian empire. But while this epic struggle forms the core of his work, Herodotus' natural curiosity frequently gives rise to colorful digressions - a description o' the natural wonders of Egypt; an account of European lake-dwellers; and far-fetched accounts of dog-headed men and gold-digging ants. With its kaleidoscopic blend of fact and legend, the 'Histories' offers a compelling Greek view of the world of the fifth century BC.",
        createdBy: emma
      },{
        author: 'Siddhartha Mukherjee',
        title: 'The Gene: An Intimate History',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1463591739l/27276428._SY475_.jpg',
        releaseYear: 2016,
        genre: 'History',
        pg: '592',
        ISBN: '1476733503',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B019CGXQ6C',
        descriotion: "From the Pulitzer Prize-winning, bestselling author of The Emperor of All Maladies—a magnificent history of the gene and a response to the defining question of the future: What becomes of being human when we learn to “read” and “write” our own genetic information? Siddhartha Mukherjee has a written a biography of the gene as deft, brilliant, and illuminating as his extraordinarily successful biography of cancer. Weaving science, social history, and personal narrative to tell us the story of one of the most important conceptual breakthroughs of modern times, Mukherjee animates the quest to understand human heredity and its surprising influence on our lives, personalities, identities, fates, and choices. Throughout the narrative, the story of Mukherjee’s own family—with its tragic and bewildering history of mental illness—cuts like a bright, red line, reminding us of the many questions that hang over our ability to translate the science of genetics from the laboratory to the real world. In superb prose and with an instinct for the dramatic scene, he describes the centuries of research and experimentation—from Aristotle and Pythagoras to Mendel and Darwin, from Boveri and Morgan to Crick, Watson and Franklin, all the way through the revolutionary twenty-first century innovators who mapped the human genome. As The New Yorker said of The Emperor of All Maladies, “It’s hard to think of many books for a general audience that have rendered any area of modern science and technology with such intelligence, accessibility, and compassion…An extraordinary achievement.” Riveting, revelatory, and magisterial history of a scientific idea coming to life, and an essential preparation for the moral complexity introduced by our ability to create or “write” the human genome, The Gene is a must-read for everyone concerned about the definition and future of humanity. This is the most crucial science of our time, intimately explained by a master.",
        createdBy: emma
      },{
        author: 'Hillary Rodham Clinton',
        title: 'Living History',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442705677l/56073._SY475_.jpg',
        releaseYear: 2004,
        genre: 'History',
        pg: '567',
        ISBN: '0743222253',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B009P3N1GS',
        descriotion: "A surprisingly engaging and, at points, even compelling book...Clinton provides enough of a peek behind the curtain to keep the pages turning and presents intriguing new details on her role in shaping the policies of her husband's presidency. Hillary Rodham Clinton is known to hundreds of millions of people around the world. Yet few beyond her close friends and family have ever heard her account of her extraordinary journey. She writes with candor, humor and passion about her upbringing in suburban, middle-class America in the 1950s and her transformation from Goldwater Girl to student activist to controversial First Lady. Living History is her revealing memoir of life through the White House years. It is also her chronicle of living history with Bill Clinton, a thirty-year adventure in love and politics that survives personal betrayal, relentless partisan investigations and constant public scrutiny. Hillary Rodham Clinton came of age during a time of tumultuous social and political change in America. Like many women of her generation, she grew up with choices and opportunities unknown to her mother or grandmother. She charted her own course through unexplored terrain -- responding to the changing times and her own internal compass -- and became an emblem for some and a lightning rod for others. Wife, mother, lawyer, advocate and international icon, she has lived through America's great political wars, from Watergate to Whitewater. The only First Lady to play a major role in shaping domestic legislation, Hillary Rodham Clinton traveled tirelessly around the country to champion health care, expand economic and educational opportunity and promote the needs of children and families, and she crisscrossed the globe on behalf of women's rights, human rights and democracy. She redefined the position of First Lady and helped save the presidency from an unconstitutional, politically motivated impeachment. Intimate, powerful and inspiring, Living History captures the essence of one of the most remarkable women of our time and the challenging process by which she came to define herself and find her own voice -- as a woman and as a formidable figure in American politics.",
        createdBy: emma
      },{
        author: 'William L. Shirer',
        title: 'The Rise and Fall of the Third Reich: A History of Nazi Germany',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331223772l/767171.jpg',
        releaseYear: 1990,
        genre: 'History',
        pg: '1614',
        ISBN: '0671728687',
        preview: 'https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07XD76H41',
        descriotion: "Hitler boasted that The Third Reich would last a thousand years. It lasted only 12. But those 12 years contained some of the most catastrophic events Western civilization has ever known. No other powerful empire ever bequeathed such mountains of evidence about its birth and destruction as the Third Reich. When the bitter war was over, and before the Nazis could destroy their files, the Allied demand for unconditional surrender produced an almost hour-by-hour record of the nightmare empire built by Adolph Hitler. This record included the testimony of Nazi leaders and of concentration camp inmates, the diaries of officials, transcripts of secret conferences, army orders, private letters—all the vast paperwork behind Hitler's drive to conquer the world. The famed foreign correspondent and historian William L. Shirer, who had watched and reported on the Nazis since 1925, spent five and a half years sifting through this massive documentation. The result is a monumental study that has been widely acclaimed as the definitive record of one of the most frightening chapters in the history of mankind. This worldwide bestseller has been acclaimed as the definitive book on Nazi Germany; it is a classic work. The accounts of how the United States got involved and how Hitler used Mussolini and Japan are astonishing, and the coverage of the war-from Germany's early successes to her eventual defeat-is must reading",
        createdBy: emma
      }
      ])
    })

    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })

})
