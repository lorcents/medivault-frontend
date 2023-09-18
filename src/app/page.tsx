import AppBar from "@/components/AppBar"
import Content from "@/components/home"

export default function Home() {
  return (<>
   <AppBar/>
   <div className=" py-12">
        <div className="container mx-auto">
          <Content imageOnLeft={true} />
        </div>
      </div>

      <div className=" py-12">
        <div className="container mx-auto">
          <Content imageOnLeft={false} />
        </div>
      </div>
   </>
  )
}
