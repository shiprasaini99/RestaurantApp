import landingImage from "../assets/landing.png";
import playStore from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "../app/components/SearchBar";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
          pathname: `/search/${searchFormValues.searchQuery}`,
        });
      };
  return (
    <div className='flex flex-col gap-12'>
      <div className='bg-white rounded-lg shadow-md py-9 flex flex-col gap-6 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-orange-600'>
            Tuck into a takeway today
        </h1>
        <span className='text-xl'>Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className='bg-white grid md:grid-cols-2 gap5'>
        <img src={landingImage}/>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
        </span>
        <span>
            Download Veg delights app for faster ordering and personalised recommendations
        </span>
        <img src={playStore} />
        </div>


        
    </div>
       
    </div>
  )
}
