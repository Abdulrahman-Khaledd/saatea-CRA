import SunLogo from "../assets/sun-logo.svg"

document.fonts.add(new FontFace("LogoFont","url('./DG_Sahabah_Reg.woff2')format('woff2')"))
const textStyle = {    display: "inline-block",
    fontFamily: "LogoFont",
    lineHeight: 1.2,
    color: "#00b3e6",   
    
}

const logoStyle = {
    margin: 0,
    padding: "5px",
    boxSizing: "border-box",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}


export const Logo = ({size=2 , style}) => {
  return (
    <div id="logo" style={{...logoStyle,...style}}>

    <img src={SunLogo} alt="شعار ساطع" width={30*size} height={12*size}/>
    
    <span style={{...textStyle,fontSize: 1*size + "rem"}} >
        ساطع
    </span>

</div>
  )
}
