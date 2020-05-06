
var vm = new Vue({
  el: '#ex',
  data: {
    expStart: 1,
    expEnd: 70,
    expOutPut: '',
    expStartSave: '',
    expEndSave: '',
    start: '',
    plus: '',
    sum: '',
    hdog: 20000,
    pdog:3000,
    bdog:1000,
    gdog: 100,
    mindLv: '',
    mindExp: '',
    mindNewLv: '',
    mindNewExp: '',
    mindSumLv: '',
    mindSumMoney: '',
    mindPlus: '',
    Asum: '',
    Bsum: '',
    mindLvSave: '',
    mindMoneySvae: ''
  },
  methods: {
    exp: function () {
      // console.log(this.expStart)
      // console.log(this.expEnd)
      this.expStartSave=this.outPutExp(this.expStart)
      this.expEndSave=this.outPutExp(this.expEnd)
      this.expOutPut=this.expEndSave-this.expStartSave
      // console.log(this.outPutExp(this.expStart))
      console.log(this.expOutPut)
      // console.log(this.expOutPut)
    },
    mExp: function () {
      this.yExp(this.mindLv,this.mindExp)
      // console.log(this.Asum)
      // console.log(this.Bsum)
      this.mindLvSave=this.Asum
      this.mindMoneySvae=this.Bsum
      this.yExp(this.mindNewLv,this.mindNewExp)
      // console.log(this.Asum)
      // console.log(this.Bsum)
      this.mindSumLv=this.Asum-this.mindLvSave
      this.mindSumMoney=this.Bsum-this.mindMoneySvae
      // console.log(this.mindSumLv)
      // console.log(this.mindSumMoney)
    },
    allExp: function (x) {
      if(x<=20)
      {
        this.start=20
        this.sum=0
        x=x-1
        this.plus=20
      }
      else if(20<x&&x<=30)
      {
        this.start=400
        this.sum=3800
        x=x-20
        this.plus=40
      }
      else if(30<x&&x<=40)
      {
        this.start=800
        this.sum=9600
        x=x-30
        this.plus=160
      }
    else if(40<x&&x<=50)
      {
        this.start=2400
        this.sum=24800
        x=x-40
        this.plus=240
      }
    else if(50<x&&x<=60)
      {
        this.start=4800
        this.sum=59600
        x=x-50
        this.plus=480
      }
    else if(60<x&&x<=70)
      {
        this.start=9600
        this.sum=129200
        x=x-60
        this.plus=840
      }
    else if(70<x&&x<=80)
      {
        this.start=18000
        this.sum=263000
        x=x-70
        this.plus=1200
      }
      // console.log(this.start) 
      // console.log(this.sum)
      // console.log(this.plus)
      return x
    },
    outPutExp: function (x) {
      x=this.allExp(x)
      console.log(this.sum)
      console.log(this.start)
      console.log(this.plus)
      console.log(x)
      while (x>0)
      {
        this.sum=this.sum+this.start
        this.start=this.start+this.plus
        x=x-1
      }
      return this.sum
      // console.log(this.sum)
    },
    yExp: function (x,y) {
      if(x==0)
      {
        this.yExpA(y)
      }
      else if(x==1)
      {
        this.yExpB(y)
      }
      else if(x==2)
      {
        this.yExpC(y)
      }
      else if(x==3)
      {
        this.yExpD(y)
      }
      else if(x==4)
      {
        this.yExpE(y)
      }
    },
    yExpA: function(y) {
      this.mindPlus=50
      if(y==1)
      {
        this.Asum=0
        this.Bsum=0
      }
      else if(0<y&&y<=5)
      {
        this.mindPlus+=0
        y=y-1
        this.Asum=y*this.mindPlus
        this.Bsum=y*this.mindPlus*10
      }
      else if(5<y&&y<=10)
      {
        y=y-5
        this.yExp(0,5)
        this.mindPlus=50+10
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(10<y&&y<=15)
      {
        y=y-10
        this.yExp(0,10)
        this.mindPlus=50+20
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(15<y&&y<=20)
      {
        y=y-15
        this.yExp(0,15)
        this.mindPlus=50+30
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }  
      else if(20<y&&y<=25)
      {
        y=y-20
        this.yExp(0,20)
        this.mindPlus=50+40
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      // console.log(this.Asum)
      // console.log(this.Bsum)
      return this.Asum,this.Bsum
    },
    yExpB: function (y){
      this.mindPlus=70
      if(y==1)
      {
        this.Asum=1700
        this.Bsum=10000+17000
      }
      else if(0<y&&y<=5)
      {
        y=y-1
        this.yExp(1,1)
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(5<y&&y<=10)
      {
        y=y-5
        this.yExp(1,5)
        this.mindPlus=70+10
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(10<y&&y<=15)
      {
        y=y-10
        this.yExp(1,10)
        this.mindPlus=70+20
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(15<y&&y<=20)
      {
        y=y-15
        this.yExp(1,15)
        this.mindPlus=70+30
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(20<y&&y<=25)
      {
        y=y-20
        this.yExp(1,20)
        this.mindPlus=70+40
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(25<y&&y<=30)
      {
        y=y-25
        this.yExp(1,25)
        this.mindPlus=70+50
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      return this.Asum,this.Bsum
    },
    yExpC: function (y){
      this.mindPlus=90
      if(y==1)
      {
        this.Asum=4480
        this.Bsum=20000+54800
      }
      else if(0<y&&y<=5)
      {
        y=y-1
        this.yExp(2,1)
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(5<y&&y<=10)
      {
        y=y-5
        this.yExp(2,5)
        this.mindPlus=90+10
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(10<y&&y<=15)
      {
        y=y-10
        this.yExp(2,10)
        this.mindPlus=90+20
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(15<y&&y<=20)
      {
        y=y-15
        this.yExp(2,15)
        this.mindPlus=90+30
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(20<y&&y<=25)
      {
        y=y-20
        this.yExp(2,20)
        this.mindPlus=90+40
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(25<y&&y<=30)
      {
        y=y-25
        this.yExp(2,25)
        this.mindPlus=90+50
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(30<y&&y<=35)
      {
        y=y-30
        this.yExp(2,30)
        this.mindPlus=90+60
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      return this.Asum,this.Bsum
    },
    yExpD: function (y){
      this.mindPlus=120
      if(y==1)
      {
        this.Asum=8590
        this.Bsum=30000+115900
      }
      else if(0<y&&y<=5)
      {
        y=y-1
        this.yExp(3,1)
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(5<y&&y<=10)
      {
        y=y-5
        this.yExp(3,5)
        this.mindPlus=120+10
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(10<y&&y<=15)
      {
        y=y-10
        this.yExp(3,10)
        this.mindPlus=120+20
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(15<y&&y<=20)
      {
        y=y-15
        this.yExp(3,15)
        this.mindPlus=120+30
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(20<y&&y<=25)
      {
        y=y-20
        this.yExp(3,20)
        this.mindPlus=120+40
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(25<y&&y<=30)
      {
        y=y-25
        this.yExp(3,25)
        this.mindPlus=120+50
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(30<y&&y<=35)
      {
        y=y-30
        this.yExp(3,30)
        this.mindPlus=120+60
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(35<y&&y<=40)
      {
        y=y-35
        this.yExp(3,35)
        this.mindPlus=120+70
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      return this.Asum,this.Bsum
    },
    yExpE: function (y){
      this.mindPlus=150
      if(y==1)
      {
        this.Asum=14670
        this.Bsum=40000+206700
      }
      else if(0<y&&y<=5)
      {
        y=y-1
        this.yExp(4,1)
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10

      }
      else if(5<y&&y<=10)
      {
        y=y-5
        this.yExp(4,5)
        this.mindPlus=150+10
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(10<y&&y<=15)
      {
        y=y-10
        this.yExp(4,10)
        this.mindPlus=150+20
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(15<y&&y<=20)
      {
        y=y-15
        this.yExp(4,15)
        this.mindPlus=150+30
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(20<y&&y<=25)
      {
        y=y-20
        this.yExp(4,20)
        this.mindPlus=150+40
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(25<y&&y<=30)
      {
        y=y-25
        this.yExp(4,25)
        this.mindPlus=150+50
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(30<y&&y<=35)
      {
        y=y-30
        this.yExp(4,30)
        this.mindPlus=150+60
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(35<y&&y<=40)
      {
        y=y-35
        this.yExp(4,35)
        this.mindPlus=150+70
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      else if(40<y&&y<=45)
      {
        y=y-40
        this.yExp(4,40)
        this.mindPlus=150+80
        this.Asum=this.Asum+y*this.mindPlus
        this.Bsum=this.Bsum+y*this.mindPlus*10
      }
      return this.Asum,this.Bsum
    },
  }
});
