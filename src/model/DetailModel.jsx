import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
export class DetailModel{
    constructor(coin,history){
        // coin verisi
        this.coin=coin;
        // kartlar verisi
        this.infoFields=[
            {
                icon:<SiCoinmarketcap />,
                label:"Market Hacmi",
                value:this.coin?.marketCapUsd,
            },
            {
                icon:<MdEventAvailable />,
                label:"Tedarik",
                value:this.coin?.marketCapUsd,
            },
            {
                icon:<MdOutlinePriceChange />,
                label:"Fiyat (USD)",
                value:this.coin?.priceUsd,
            },
            {
                icon:<FaPercent />,
                label:"24s Değişim (%)",
                value:this.coin?.changePercent24Hr,
            },
            {
                icon:<RiStockFill />,
                label:"24s Hacim (%)",
                value:this.coin?.volumeUsd24Hr,
            },
        ]
        //fiyat geçmişi verisi
        console.log(history)

        // bizden istenilen
        this.chartData={
            labels: history.map((item)=>new Date(item.date).toLocaleDateString()),
            datasets:[
                {
                    id:1,
                    label:"fiyat",
                    data:history.map((item)=>item.priceUsd)
                },
            ],
        };
        
    }
}