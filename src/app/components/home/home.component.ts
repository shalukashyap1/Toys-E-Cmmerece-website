import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img1:string="https://healthyrootsdolls.com/cdn/shop/files/07.15.2022_Curlfriends.05_2048x.jpg?v=1658073822";
  img2:string="https://cdn.firstcry.com/education/2022/11/06094158/Toy-Names-For-Kids.jpg";
  img3:string="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-07/44289962475_e5c5209506_b.jpg";
  img4:string="https://th.bing.com/th/id/OIP.f6yPRsrBjLCZ4UriQrqQlQEsDh?pid=ImgDet&rs=1";
  img5:string="https://images.immediate.co.uk/production/volatile/sites/28/2019/10/best-robots-e5ac252.jpg?quality=90&resize=980,654";
  img6:string="https://3.bp.blogspot.com/-P8La8uG86Xs/VO6jZlV2fRI/AAAAAAAADY0/e2Pz288BTXU/s1600/334-Toys%2BLying%2BCovered%2BTubes%2BMonitor%2BStrapped%2BAround%2BBelly%2BHD%2BWallpaperz.jpg";
  img7:string="https://media.istockphoto.com/id/688106752/photo/mechanic.webp?b=1&s=170667a&w=0&k=20&c=OyZ7XQDOSvCGbMR5WQQeFQ4eWAqBTMI0-fnXx706-4w=";
  img8:string="https://cdn.thewirecutter.com/wp-content/uploads/2016/11/learning-toys-lowres-01536.jpg";
  img9:string="https://2.bp.blogspot.com/-zcZtc1YNX-k/VWs0hy3siKI/AAAAAAAAO1Y/v4tZF8iu6gQ/s1600/Toy%2BStory%2BHD%2BWallpapers7.jpg";
  img10:string="https://edsource.org/wp-content/uploads/2016/01/stacking-toys-e1453855410167-1024x768.jpg";
  img11:string="https://tse2.mm.bing.net/th?id=OIP.L_kiGsVUM2gbShOoDJEgZwHaEo&pid=Api&P=0&h=180";
  img12:string="https://images.immediate.co.uk/production/volatile/sites/28/2019/10/best-robots-e5ac252.jpg?quality=90&resize=980,654";


  links=[
    {
      img:"https://th.bing.com/th/id/OIP.LDhUZbOpUfO84wx5Qc_FZwHaKY?pid=ImgDet&rs=1",
      title:"Under 500Rs-1000Rs"
    },
    {
      img:"https://th.bing.com/th/id/OIP.XI20hYOEXSRRw9bppSwFTwHaK_?pid=ImgDet&rs=1.com-barbie-dollbarbiefashion-dolltoybusinesswomanbild-lilli-1701528527002rdps7.png",
      title:"Under 1000Rs-1500Rs"
    },
    {
      img:"https://i.pinimg.com/originals/7e/f8/58/7ef85835f9fa15147e90c7b4d76cb40f.jpg",
      title:"Under 1500Rs-2000Rs"
    },
    {
      img:"https://th.bing.com/th/id/OIP.d6NzeRJBlSYQwiAM4jaj4QHaHa?pid=ImgDet&w=500&h=500&rs=1",
      title:"Under 2000-3000Rs"
    },
    {
      img:"https://assets.onbuy.com/i13/product/00b93041f916417780c4e8b2528a7c93-o14656044/barbie-legends-of-ireland-collection-the-spellbound-lover.jpg",
      title:"Under 3000Rs-5000Rs"
    },
    {
      img:"https://th.bing.com/th/id/OIP.dWWNMnwQsA37HWUbx1wZwAHaHa?pid=ImgDet&w=640&h=640&rs=1",
      title:"Under UpTo 5000Rs"
    },


  ]
  Actionlinks=[
    {
      img:"https://vignette.wikia.nocookie.net/fnaf-merch/images/f/f2/Freddyactionfigure.png/revision/latest?cb=20170628042321",
      title:"Five Nights At Fradies"
    },
    {
      img:"https://vignette.wikia.nocookie.net/sml/images/e/e7/New_action_figure_character_buzz_lightyear.png/revision/latest?cb=20170530185751",
      title:"Buzz Lightyear"
    },
    {
      img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3960ed49-3864-4f33-9e3e-9edcfe1be667/dbity7o-515e2ccb-3c0c-467a-b226-49529124cb4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zOTYwZWQ0OS0zODY0LTRmMzMtOWUzZS05ZWRjZmUxYmU2NjcvZGJpdHk3by01MTVlMmNjYi0zYzBjLTQ2N2EtYjIyNi00OTUyOTEyNGNiNGUucG5nIn1dXX0.SxgVXpcWcTCNgMUniRGE9xOJfeBB211DhLnjLpyjLBU",
      title:"Five Nights At Fradies"
    },
    {
      img:"https://static3.tcdn.com.br/img/img_prod/460977/pre_venda_boneco_homem_aranha_spider_man_advanced_suit_marvel_s_spider_man_ps4_vgm31_escala_1_6_hot__41848_1_20190313160645.png",
      title:"Spiderman"
    },
    {
      img:"https://necaonline.com/wp-content/uploads/2017/02/DD9.png",
      title:"Action Marvel"
    },
    {
      img:"https://www.bulletproofvillain.com.au/assets/alt_1/E93655L00.png?20200529055941",
      title:"Star Wars"
    },
  ]

  Carslinks=[
    {
      img:"",
      title:"Five Nights At Fradies"
    },
    {
      img:"",
      title:"Buzz Lightyear"
    },
    {
      img:"",
      title:"Five Nights At Fradies"
    },
    {
      img:"https://pluspng.com/img-png/png-toy-car-toy-police-car-1-png-1181-944-things-ashlea-likes-pinterest-police-cars-diecast-and-cars-1181.png",
      title:"Spiderman"
    },
    {
      img:"https://th.bing.com/th/id/R.0ec0897eb84eaa17e0735dd1de2234cf?rik=wwgCoGH%2bHJjsdA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2frc-car-silhouette%2frc-car-silhouette-3.png&ehk=lY7%2b%2be0DI6Hd5yNhtzvnoll%2f27LUmoCW9hWKY9orgr0%3d&risl=&pid=ImgRaw&r=0",
      title:"Action Marvel"
    },
    {
      img:"https://pluspng.com/img-png/blue-toy-car-png-512x512-pixel-512.png",
      title:"Star Wars"
    },
    {
      img:"https://sreditingzone.com/wp-content/uploads/2017/10/S.R-3.png",
      title:"Star Wars"
    },
  ]
}
