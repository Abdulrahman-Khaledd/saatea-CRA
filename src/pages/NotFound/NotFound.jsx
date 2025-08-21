
import { Header, Footer } from "../../components";
import notFound from "../../assets/pages_images/not-found.svg";

function NotFound() {
  document.title = 'الصفحة غير موجودة';
  return (
    <>
      <Header />
      <main className="container text-center" style={{flex:1,alignContent:"center"}} >
        <img loading="lazy" width={50+'%'} src={notFound} alt="" />
        <h1 className="my-2" >
          لم يتم العثور على الصفحة 
        </h1> 
      </main>
      <Footer />
    </>
  )
}
export default NotFound;