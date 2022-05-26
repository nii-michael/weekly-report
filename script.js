var custodians = [
    {
        id:0,
        region:'Greater Accra',
        custodian:'Accra Custodian'
    },
    {
        id:1,
        region:'Suyani',
        custodian:'Suyani custodian'
    },
    {
        id:2,
        region:'Kumasi',
        custodian:'Kumasi Custodian'
    },
    {
        id:2,
        region:'Koforidua',
        custodian:'Koforidua Custodian'
    },

]

var regionSelector = document.getElementById('regionselector');
var custodianName = document.getElementById('gg');

function changeCus(){
    console.log('update')
    custodians.map((data)=>{
        const {region,custodian} = data;
        if(regionSelector.value==region){
            console.log(custodian);
            custodianName.value=custodian;
        }
       
    })
}

