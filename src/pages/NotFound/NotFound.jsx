
import { Header, Footer } from "../../components";
import notFound from "../../assets/not-found.svg";

function NotFound() {
  return (
    <>
      <Header />
      <div className="container text-center" style={{flex:1,alignContent:"center"}} >
        <img width={50+'%'} src={notFound} alt="" />
        <h1 className="my-2" >
          لم يتم العثور على الصفحة 
        </h1> 
      </div>
      <Footer />
    </>
  )
}
export default NotFound;