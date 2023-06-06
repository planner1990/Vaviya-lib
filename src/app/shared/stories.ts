export interface storiesModel {
  id: number,
  title: string,
  body: string,
  src: string
}

export class Stories {
  data: storiesModel[] = [
    {
      id: 1,
      title: "زیبای خفته",
      body: "سالها پیش، در یک امپراتوری زیبا، یک پادشاه و ملکه زندگی می کردن که فقط یک آرزو داشتن! اونا همیشه دعا می کردن: اوه! خداوند عزیز! خواهش می کنم به ما یک فرزند بده و بعد از اون ما دیگه هیچی از تو نمیخواییم!\n" +
        "\n" +
        "یه روز که ملکه در حال شنا کردن در رودخونه بود، قورباغه ای از راه رسید و گفت:\n" +
        "\n" +
        "آرزوی تو برآورده میشه! تو بالاخره صاحب فرزند میشی!\n" +
        "\n" +
        "و همونطور که قورباغه پیش بینی کرده بود، ملکه یک دختر زیبا به دنیا آورد. پادشاه اونقدر هیجان زده بود که نتونست جلوی خودش رو برای برگزاری یک مهمونی بزرگ برای جشن گرفتن بگیره. او نه تنها دوست‌ها و فامیل‌هاد، بلکه پری‌ها رو هم به مهمونی دعوت کرد چون فکر میکرد که اونا با شاهزاده کوچولو مهربون هستن و به اون هدیه میدن! اون می‌دونست که سیزده تا پری در کشور زندگی میکنن، اما اون فقط دوازده بشقاب طلایی داشت، برای همین مجبور شد یکی از پری‌ها رو به مهمونی دعوت نکنه!\n" +
        "\n" +
        "جشن با شکوه برگزار شد. وقتی که جشن به پایان رسید، پری‌ها دور شاهزاده خانم جمع شدن و شروع کردن تا به اون هدیه بدن. یکی بهش اخلاق خوب هدیه داد، یکی زیبایی، سومی ثروت، و هدایای دیگه! هرچیزی که شما بتونید فکرش رو بکنید!\n" +
        "\n" +
        "ولی وقتی که پری یازدهم هدیه‌اش رو داد، سیزدهمین پری که دعوت نشده بود وارد قصر شد! اون خیلی عصبانی بود چون حس میکرد که بهش بی احترامی شده! اون شروع به داد و فریاد کرد:\n" +
        "\n" +
        "شاهزاده خانم روز تولد پانزده سالگیش، دستش رو به یک دوک نخ ریسی میزنه و میمیره! و بدون اینکه چیزدیگه‌ای بگه برگشت و از قصر بیرون رفت! پری دوازدهم، چون هنوز هدیه اش را نداده بود، جلو اومد. اون نمی تونست نفرین رو از بین ببره، اما هنوز یک کار بود که از دستش برمی‌اومد:\n" +
        "\n" +
        "شاهزاده خانم با دست زدن به دوک نمی میره، بلکه صد سال به خواب میره!\n" +
        "\n" +
        "پادشاه که از نجات دخترش ناامید شده بود، دستور داد تا تموم دوک های امپراتوری رو آتیش بزنن.\n" +
        "\n" +
        "شاهزاده خانم بزرگ شد و تموم هدیه‌هایی که پری‌ها بهش داده بودن در صورت و رفتارش مشخص بود. اون آنقدر دوست داشتنی، متواضع، شیرین، و مهربون و باهوش بود که هر کس برای بار اول اونو میدید همون لحظه عاشقش میشد!\n" +
        "\n" +
        "اما در پانزدهمین سالگرد تولدش، اون توی قلعه تنها بود و حوصله اش سر رفت و شروع کرد به راه رفتن دور قلعه کرد و توی اتاق‌ها سرک کشید که ناگهان چشمش به یک برج قدیمی افتاد. اون از پله‌های باریک پیچ در پیچرد شد و به یک در کوچیک رسید. یک کلید زنگ زده از قفل در بیرون زده بود. شاهزاده خانوم در رو بایز کرد و توی اتاق پیرزنی با دوک دوک نخ ریسی نشسته بود و داشت نخ میریسید! شاهزاده خانم گفت:\n" +
        "\n" +
        "اوه! سلام مادربزرگ! داری چی کار می کنی؟\n" +
        "\n" +
        "من دارم نخ میریسم! من تا حالا همچین چیزی ندیدم! این چیه که اینقدر سریع میچرخه؟\n" +
        "\n" +
        "و در همین حین دوک را در دست گرفت و شروع به چرخیدن کرد! اما درست در همون لحظه که دستش دوک رو لمس کرد، از حال رفت و در خوابی عمیق فرو رفت!\n" +
        "\n" +
        "وهمه‌ی افراد قصر هم به خواب رفتن. پادشاه و ملکه که برگشته بودن و در تالار بزرگ بودن، و تمام دربار با آنها به خواب عمیقی فرو رفتن. اسب‌ها در اصطبل، سگ‌ها در حیاط، کبوترها روی پشت بام، مگس‌ها روی دیوار، همه با هم به خواب رفتن.\n" +
        "\n" +
        "سپس دور قصر، پرچینی از خار که هر سال ضخیم تر می شد، درست شد! این پرچین اونقدر ضخیم شد که سرانجام کل قلعه از پنهان شد و چیزی از اون به جز پره روی سقف معلوم نبود!\n" +
        "\n" +
        "از اون لحظه به بعد، شایعه ای در مورد زیبای خفته به کشورهای دیگه رسید و هر از گاهی، بسیاری از شاهزاده‌ها می‌اومدن و سعی می کردن به زور از پرچین عبور کنن. اما برای اونا غیرممکن بود که این کار رو انجام بدن، چون خارها به هم چسبیده بودن و شاهزاده‌ها در اونا گرفتار میشدن و به طور غم انگیزی از دنیا میرفتن!\n" +
        "\n" +
        "سالها بعد، یک شاهزاده به اون کشور اومد. اون توی راه خود از پیرمردی شنید که صد سال است دختری زیبا در پشت اون خارها به خواب رفته! و پادشاه و ملکه و تمام دربار هم با اون به خواب رفتن. پیرمرد به شاهزاده گفته بود که بسیاری از شاهزاده‌ها می‌خواستن از پرچین عبور کنن، اما توی خارها گیر کرده و مرده و بودن!\n" +
        "\n" +
        "اما شاهزاده جوان با شجاعت گفت:\n" +
        "\n" +
        "من تموم تلاشم را میکنم، من حتما موفق میشم و شاهزاده خانم دوست داشتنی را ملاقات میکنم. پیرمرد که خیلی مهربون بود، سعی کرد شاهزاده رو منصرف کنه، اما اون به حرف‌های پیرمرد گوش نداد. حالا دیگه صد سال گذشته بود و وقتش بود که شاهزاده خانم از خواب بیدار بشه!\n" +
        "\n" +
        "وقتی که شاهزاده به نزدیکی پرچین رسید، اون به پرچینی از گلهای زیبا و دوست داشتنی تبدیل شد که به کناری خم شدن و به پرنس اجازه‌ی عبور دادن!\n" +
        "\n" +
        "وقتی شاهزاده به حیاط قصر رسید، اسب‌ها و سگ‌ها را دید که خوابیدن و روی پشت بوم کبوترها سرشون رو زیر بالشون گذاشته بودن و خوابیده بودن. و وقتی به داخل قصر رفت، مگس‌های روی دیوار خواب بودن و آشپز آشپزخونه دستش رو بلند کرده بود تا غذا رو هم بزنه.\n" +
        "\n" +
        "سپس جلوتر رفت و توی تالار دید که همه‌ی دربار خوابیدن و بالای سر اونا، پادشاه و ملکه روی صندلی پادشاهی خوابشون برده. اون به راه رفتن ادامه داد! همه جا اینقدر ساکت بود که شاهزاده میتونست صدای پای خودش رو بشنوه!\n" +
        "\n" +
        "و سرانجام به برج رسید و از پله‌های پیچ در پیچ بالا رفت و در اتاق کوچیکی رو که شاهزاده خانم توی اون خوابیده بود باز کرد. و وقتی اون رو دید که توی خواب خیلی زیبا به نظر میرسه، دست اون رو بوسید! و شاهزاده خانم از خواب بیدار شد و چشمانش رو باز کرد و با مهربونی به شاهزاده نگاه کرد. اونا با هم به تالار اصلی رفتن و دیدن که پادشاه و ملکه و همه‌ی درباریان از خواب بیدار شدن!\n" +
        "\n" +
        "سپس عروسی شاهزاده و شاهزاده خانم با شکوه تمام برگزار شد و اونا تا آخر عمر به خوبی و خوشی زندگی کردن!",
      src: "../../assets/images/type-1/1/Untitled-1.jpg"
    }
  ]
}
