const unitBumf = ``

const jsonSrc = "https://script.googleusercontent.com/macros/echo?user_content_key=fVEnOdlIs1Qv8BYoy7mDbbVDyRotU6VgI1anfVENioOon4cdBar80-5kQAV0-8uatIawvJ6bapCknNCdQOwynz92JSyGfaE7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGHgPtx9O9gEonr6HCqZD3BAtyYpuU2jirG75FOHaN9IYwW8qDG8bGYY_uIziZ__NekCczCD7G8j&lib=MdcCLrFaX4dKwUEcTUI7maOxJfuXJbOWK";


const menuData = {
  units: [
    {
      prefix: "メイン",
      title: "T.利央 2040のストーリーをクリアする",
      activities: {
      },
      done: 0,
      available: 4,
      pointsGot: 0,
      pointsAvailable: 4,
      award: "trophy"
    },    
    {
      prefix: "メイン",
      title: "どこかにいる四天王を撃破する",
      activities: {
      },
      done: 0,
      available: 4,
      pointsGot: 0,
      pointsAvailable: 4,
      award: "gold"
    },
    {
      prefix: "メイン",
      title: "怪盗集団を捕獲する",
      activities: {
      },
      done: 0,
      available: 4,
      pointsGot: 0,
      pointsAvailable: 4,
      award: "gold"
    }, 
    {
      prefix: "メイン",
      title: "三騎士のカードを手に入れる",
      activities: {
      },
      done: 0,
      available: 3,
      pointsGot: 0,
      pointsAvailable: 3,
      award: "silver"
    }, 
    {
      prefix: "メイン",
      title: "12体の龍のカードを集める",
      activities: {
      },
      done: 0,
      available: 5,
      pointsGot: 0,
      pointsAvailable: 5,
      award: "silver"
    }, 
    {
      prefix: "サブ",
      title: "1から107のナンバーズを全て揃える",
      activities: {
      },
      done: 8,
      available: 107,
      pointsGot: 8,
      pointsAvailable: 107,
      award: "silver"
    } ,
    {
      prefix: "サブ",
      title: "決闘を100回する",
      activities: {
      },
      done: 16,
      available: 100,
      pointsGot: 16,
      pointsAvailable: 107,
      award: "silver"
    },
    {
      prefix: "サブ",
      title: "エーテル適性を一定以上上げる",
      activities: {
      },
      done: 240,
      available: 1500,
      pointsGot: 240,
      pointsAvailable: 1500,
      award: "silver"
    } ,
    {
      prefix: "特異点",
      title: "特異点を見つける",
      activities: {
      },
      done: 0,
      available: 10,
      pointsGot: 0,
      pointsAvailable: 10,
      award: "silver"
    }   
  ]
}
Handlebars.registerHelper('circle', function(activities) {
  const radius = 17;
  const fraction = (activities.done / activities.available);
  const stroke = Math.PI * (radius + radius);
  return stroke - (fraction * stroke);
});
Handlebars.registerHelper('grey', function(activities) {
  let className = 'not-started'
  if  (activities.done > 0){
    className = ''
  }
  return className;
});

var templateUnit = document.querySelector('.tmpl-unit').innerHTML,
      templateData = menuData,
    templateCompile = Handlebars.compile(templateUnit);
document.querySelector('.unit-list').innerHTML = templateCompile(templateData);

const units = document.querySelectorAll('.unit');

function openUnit(e) {
  const unitDOM = e.currentTarget;
  console.log(e)
  //if not active
  if( ! unitDOM.classList.contains('active') ) {
    //close other active:
    for (var unit of units) {
      if(unit.classList.contains('active') ){
        unit.classList.remove('active');
        unit.querySelector('.lessons').remove(); 
      }
    }
    //mark as active:
    unitDOM.classList.add('active');
    //add fake content:
    const content = document.createElement("div");
    content.classList.add('lessons');
    content.innerHTML = unitBumf
    unitDOM.append(content);
  } else{
    unitDOM.classList.remove('active');
    unitDOM.querySelector('.lessons').remove(); 
  }


}
