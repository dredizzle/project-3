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
      },{
        username: "gabelton",
        email: "gabelton@gables.com",
        password: "pass",
        passwordConfirmation: "pass",
        image: "https://i.imgur.com/aFoCicH.jpg"
      },{
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
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07D7KJV13",
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",
        createdBy: emma
      },{
        author: "Harlan Coben",
        title: "Run Away",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533567545l/40697540.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 371,
        ISBN: "1538748460",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B0791ZS353",

        description: "A perfect family is shattered in RUN AWAY, the new thriller from the master of domestic suspense, Harlan Coben.You've lost your daughter.She's addicted to drugs and to an abusive boyfriend. And she's made it clear that she doesn't want to be found.Then, by chance, you see her playing guitar in Central Park.But she's not the girl you remember. This woman is living on the edge, frightened, and clearly in trouble.You don't stop to think. You approach her, beg her to come home.She runs.And you do the only thing a parent can do: you follow her into a dark and dangerous world you never knew existed. Before you know it, both your family and your life are on the line. And in order to protect your daughter from the evils of that world, you must face them head on. ",
        createdBy: emma
      },{
        author: "Jane Harper",
        title: "The Lost Man",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549469559l/39863488._SY475_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 340,
        ISBN: "1250105684",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DX23VP3",
        description:"Two brothers meet at the border of their vast cattle properties under the unrelenting sun of outback Queensland, in this stunning new standalone novel from New York Times bestseller Jane HarperThey are at the stockman’s grave, a landmark so old, no one can remember who is buried there. But today, the scant shadow it casts was the last hope for their middle brother, Cameron. The Bright family’s quiet existence is thrown into grief and anguish. Something had been troubling Cameron. Did he lose hope and walk to his death? Because if he didn’t, the isolation of the outback leaves few suspects…Dark, suspenseful, and deeply atmospheric, The Lost Man is the highly anticipated next book from the bestselling and award-winning Jane Harper, author of The Dry and Force of Nature",
        createdBy: emma
      },{
        author: "Greer Hendricks, Sarah Pekkanen",
        title: "An Anonymous Girl",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546956642l/39863515._SY475_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 375,
        ISBN: "1250133734",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4",
        description: "The next novel of psychological suspense and obsession from the authors of the blockbuster bestseller The Wife Between Us. Seeking women ages 18–32 to participate in a study on ethics and morality. Generous compensation. Anonymity guaranteed.When Jessica Farris signs up for a psychology study conducted by the mysterious Dr. Shields, she thinks all she’ll have to do is answer a few questions, collect her money, and leave.Question #1: Could you tell a lie without feeling guilt? But as the questions grow more and more intense and invasive and the sessions become outings where Jess is told what to wear and how to act, she begins to feel as though Dr. Shields may know what she’s thinking… and what she’s hiding.As Jess’s paranoia grows, it becomes clear that she can no longer trust what in her life is real, and what is one of Dr. Shields’ manipulative experiments. Caught in a web of deceit and jealousy, Jess quickly learns that some obsessions can be deadly.",
        createdBy: emma
        
      },{
        author: "Sally Hepworth",
        title: "The Mother-in-Law",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546452406l/39863405._SX318_.jpg",
        releaseYear: 2019,
        genre: "Mystery",
        pg: 340,
        ISBN: "1250120926",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DGC1GWF",
        description:"Someone once told me that you have two families in your life - the one you are born into and the one you choose. Yes, you may get to choose your partner, but you don't choose your mother-in-law. The cackling mercenaries of fate determine it all.From the moment Lucy met Diana, she was kept at arm's length. Diana is exquisitely polite, but Lucy knows, even after marrying Oliver, that they'll never have the closeness she'd been hoping for.But who could fault Diana? She was a pillar of the community, an advocate for social justice, the matriarch of a loving family. Lucy had wanted so much to please her new mother-in-law.That was ten years ago. Now, Diana has been found dead, leaving a suicide note. But the autopsy reveals evidence of suffocation. And everyone in the family is hiding something.From the bestselling author of The Family Next Door comes a new page-turner about that trickiest of relationships.",
        createdBy: emma
      },{
        author: "Tamsyn Muir",
        title: "Gideon the Ninth",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 448,
        ISBN: "1250313198",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07J6HWLPR",
        description:"My Sister, the Serial Killer is a blackly comic novel about how blood is thicker - and more difficult to get out of the carpet - than water.When Korede's dinner is interrupted one night by a distress call from her sister, Ayoola, she knows what's expected of her: bleach, rubber gloves, nerves of steel and a strong stomach. This'll be the third boyfriend Ayoola's dispatched in, quote, self-defence and the third mess that her lethal little sibling has left Korede to clear away. She should probably go to the police for the good of the menfolk of Nigeria, but she loves her sister and, as they say, family always comes first. Until, that is, Ayoola starts dating the doctor where Korede works as a nurse. Korede's long been in love with him, and isn't prepared to see him wind up with a knife in his back: but to save one would mean sacrificing the other... ",

        createdBy: emma
      },{
        author: "Rebecca Roanhorse",
        title: "Resistance Reborn",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572828304l/45452530._SY475_.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 295,
        ISBN: "0593128427",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07RDD92XD",
        description:"The heroes of the Resistance must fight back fro the edge of the oblivion in this pivotal prequel to Star Wars: The Rise of Skywalker.The Resistance is in ruins. In the wake of their harrowing escape from Crait, what was once an army has been reduced to a handful of wounded heroes. Finn, Poe, Rey, Rose, Chewbacca, Leia Organa -- their names are famous among the oppressed worlds they fight to liberate. But names can only get you so far, and Leia's last desperate call for aid has gone unanswered.From jungles of Ryloth to the shipyards of Corellia, the shadow of the First Order looms large, and those with the bravery to face the darkness are scattered and isolated. If hope is to survive, the Resistance must journey throughout the galaxy, seeking out more leaders - including those who, in days gone by, helped a nascent rebellion tripple an empire. Battles will be fought, alliances will be forged, and the Resistance will be reborn.",
        createdBy: emma
        
      },{
        author: "Blake Crouch",
        title: "Recursion",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1543687940l/42046112.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 336,
        ISBN: "1524759783",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07LCSPGTN",
        description:"That’s what New York City cop Barry Sutton is learning as he investigates the devastating phenomenon the media has dubbed False Memory Syndrome—a mysterious affliction that drives its victims mad with memories of a life they never lived.That's what neuroscientist Helena Smith believes. It’s why she’s dedicated her life to creating a technology that will let us preserve our most precious memories. If she succeeds, anyone will be able to re-experience a first kiss, the birth of a child, the final moment with a dying parent.As Barry searches for the truth, he comes face-to-face with an opponent more terrifying than any disease—a force that attacks not just our minds but the very fabric of the past. And as its effects begin to unmake the world as we know it, only he and Helena, working together, will stand a chance at defeating it.But how can they make a stand when reality itself is shifting and crumbling all around them?",

        createdBy: emma
        
      },{
        author: "Martin L. Shoemaker",
        title: "The Last Dance",
        image:"https://www.goodreads.com/book/photo/44067572-the-last-dance",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 464,
        ISBN: "1534439862",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KS83CGJ",
        description:"In space, mutiny means death—that’s why Inspector General Park Yerim is taking her investigation so seriously. The alleged mutineer is Captain Nicolau Aames, whose command of the massive Earth-Mars vessel Aldrin has come under fire. The vast System Initiative says he disobeyed orders, but his crew swears he’s in the right.",
        createdBy: emma
        
      },{
        author: "Neal Stephenson",
        title: "Fall, Or Dodge in Hell",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548719156l/41824495._SY475_.jpg",
        releaseYear: 2019,
        genre: "ScienceFiction",
        pg: 896,
        ISBN: "1534439862",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07GNKK1R4",

        description: "Yetu holds the memories for her people—water-dwelling descendants of pregnant African slave women thrown overboard by slave owners—who live idyllic lives in the deep. Their past, too traumatic to be remembered regularly, is forgotten by everyone, save one—the historian. This demanding role has been bestowed on Yetu.Yetu remembers for everyone, and the memories, painful and wonderful, traumatic and terrible and miraculous, are destroying her. And so, she flees to the surface, escaping the memories, the expectations, and the responsibilities—and discovers a world her people left behind long ago.Yetu will learn more than she ever expected to about her own past—and about the future of her people. If they are all to survive, they’ll need to reclaim the memories, reclaim their identity—and own who they really are.",
        createdBy: emma
        
      },{
        author: " Jonathan Maberry ",
        title: "Rage",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569295288l/43263146.jpg",
        releaseYear: 2019,
        genre: "Horror",
        pg: 464,
        ISBN: "1250303575",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07P7BXMB4",
      
        description:"Rage is the first title in Jonathan Maberry's brand new Joe Ledger spin-off series of international weird science thrillers.A small island off the coast of Japan is torn apart by a bioweapon that drives everyone—men, women, and children—insane with murderous rage. The people behind that attack want Korea united or destroyed. No middle ground. No mercy. And they are willing to punish any country that stands in the way—the United States, China, and Japan could all be consumed by a plague of pure destructive slaughter.Joe Ledger leads his newly formed band of international troubleshooters in their first mission to stop the terror cell, fighting alongside agents from North and South Korea. With the lives of billions at stake, Ledger is willing to bring his own brand of terror to this frightening new war.Rage is the first of the new adventures of Joe Ledger and Rogue Team International.",
        createdBy: emma
        
      },{
        author: " Stephen King",
        title: "Elevation",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542040067l/38355410._SX318_.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 146,
        ISBN: "1982102314",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07DNFC1C9",
      
        description:"Although Scott Carey doesn’t look any different, he’s been steadily losing weight. There are a couple of other odd things, too. He weighs the same in his clothes and out of them, no matter how heavy they are. Scott doesn’t want to be poked and prodded. He mostly just wants someone else to know, and he trusts Doctor Bob Ellis.",
        createdBy: emma
        
      },
      {
        author: "Paul Tremblay ",
        title: "The Cabin at the End of the World",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1511884752l/36381091.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 272,
        ISBN: "0062679104",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07F1X87BB",
      
        description:"The Bram Stoker Award-winning author of A Head Full of Ghosts adds an inventive twist to the home invasion horror story in a heart-palpitating novel of psychological suspense that recalls Stephen King’s Misery, Ruth Ware’s In a Dark, Dark Wood, and Jack Ketchum’s cult hit The Girl Next Door.Seven-year-old Wen and her parents, Eric and Andrew, are vacationing at a remote cabin on a quiet New Hampshire lake. Their closest neighbors are more than two miles in either direction along a rutted dirt road...",
        createdBy: emma
        
      },
      {
        author: "Alma Katsu",
        title: "The Hunger",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497803277l/30285766.jpg",
        releaseYear: 2018,
        genre: "Horror",
        pg: 376,
        ISBN: "0735212511",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B071G7CSHP",
      
        description:"Tamsen Donner must be a witch. That is the only way to explain the series of misfortunes that have plagued the wagon train known as the Donner Party. Depleted rations, bitter quarrels, and the mysterious death of a little boy have driven the pioneers to the brink of madness. They cannot escape the feeling that someone--or something--is stalking them. Whether it was a curse from the beautiful Tamsen, the choice to follow a disastrous experimental route West, or just plain bad luck--the 90 men, women, and children of the Donner Party are at the brink of one of the deadliest and most disastrous western adventures in American history.While the ill-fated group struggles to survive in the treacherous mountain conditions--searing heat that turns the sand into bubbling stew; snows that freeze the oxen where they stand--evil begins to grow around them, and within them. As members of the party begin to disappear, they must ask themselves",
        createdBy: emma
        
      },{
        author: "Alison Littlewood",
        title: "Mistletoe",
        image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555411630l/43260175._SY475_.jpg",
        releaseYear: 2019,
        genre: "Horror",
        pg: 304,
        ISBN: "0735212517",
        preview:"https://read.amazon.co.uk/nc/?kcrFree=only&tag=x_gr_w_preview_sin_kcr_uk-21&asin=B07KFLNL7F",
      
        description:"Leah Hamilton is looking for a new life following the tragic deaths of her husband and son. Determined to bury her grief in hard work, and desperate to escape Christmas and the pitying looks of her colleagues, she rushes through the purchase of a run-down Yorkshire farmhouse, arriving just as the snow shrouds her new home.",
        createdBy: emma
        
      },
      ])
    })

    .then(() => mongoose.connection.close()) // disconnect from the database
    .catch(err => {
      console.log(err) // log any errors
      mongoose.connection.close() // disconnect from the database
    })
})
