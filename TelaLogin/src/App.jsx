import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [empresa, setEmpresa] = useState("")

  function handleSubmitLogin(e){
    e.preventDefault()
    if(!usuario){
      toast.warn('Preencha o campo de usuario!')
      return
    }
    if(!senha){
      toast.warn('Preencha o campo de senha!')
      return
    }
    if(!empresa){
      toast.warn('Preencha a empresa!')
      return
    }

  if(usuario == 'luis' && senha == 'revanchedobolsonaro22' && empresa == 'undb'){
        toast.success(`Bem vindo ${usuario}!`)
    }else{
      toast.error(`Usuario invalido!`)
    }

  }

 
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
         <main className="containerMain">
        <div className="containerPrincipal">
            <div className="containerForm">
                <form action="">
                    <div className="containerTitle">
                        <h3 className="titleLogin">Login</h3>
                    </div>
                    <div className="containerInputs">
                        <div className="input">
                            <label for="usuario">Usuário</label>
                            <input type="text" name="usuario" value={usuario} onChange={(e)=>setUsuario(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label for="senha">Senha</label>
                            <input type="password" name="senha" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                        </div>
                        <div className="input">
                            <label for="setor">Setor</label>
                            <input type="text" name="setor" value={empresa} onChange={(e)=>setEmpresa(e.target.value)}/>
                        </div>
                        <div className="containerButtonLogin">
                            <a href="list.html" className="linkButton">
                                <button className="buttonLogin" onClick={(e)=>handleSubmitLogin(e)}>
                                    Entrar
                                </button>
                            </a>
                        </div>
                       
                    </div>
                </form>
            </div>
        </div>
        
        <div className="containerLogo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAA8FBMVEX///8AAADljgD9+Nj///39+Nq8vLzj4+P+/v/0lACTk5OFhYXc3Nyrq6sQEBD///XR0dF7e3vylQD//+1eXl4xMTH///ppaWnujwDy8vL2kQDs7Oz//+r///RSUlLCwsJxcXGXl5dCQkIsLCw6OjqioqIXFxcfHx/klhXqyort2aTkojjKysqenp6Li4u0tLTinCrtxX346b/hozZLS0v56sr79eP45Lj67sb37NP79efrzpnoiADahwDqzYvilxThu3nfrmHanj/v1qzXpE7su3PntV/npDL04q/prU7qv23//9/326L57b3gtFnsrE4B8MPdAAAIiUlEQVR4nO2bC1faSBTHA04hw8NgwAABBLRaLD5o1WrXxbrbaqttd7//t9n/nUcegI/ds7sGzv2dUzuZuXMz9587j8TWcRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYSKOS8POS49h6XCd7RyovfQ4lo4hyZZbf+lhLB1bSrdc8aXHkT22iOZDrQ2tG69wcyhddh5qLajm7f9zQEuCEmbzweYytXK6zfOEbk6xwLvpIp7SbfWp1GrxhGrXarU2HcBSdFBLe2OiOqFb2rgNbzPdjRPcqDLXUqwtqs0qB1uNRmOr4Dg1vfPt9FX18Wu9nqemWGVDb465QcXUDNFZH9DIC3WtNqhU0R5QUST/jd0FTrZ3Y5HaVXNeyW2W2v91yP8Ker+runbcuVwJwe5EV4UoZdrNXExDRzfIJamipqRKtY7SHbpV1HXZ3q7dSHboa+duOeVmd26QGUTrdvQmMe5aLRmFffyVXBp1kk3rduxY3Y51xcGsbinPYEiVBzOVscoZpjA76FzudH0uNKTgnBkJ+pBuhnS+uXPa6y7zIzh4MTmeTazb+l5y6FECbmk7c92s9o834obk1E3O04W6OW7UsGfd0TzV+dYoDYd2Ei/BMdnqNsC8K27buHbb0fTZU2ZDXdb7QXvLZkWt0O+r8s5Bv1+gqRvptlGoHHTSutllrArvbZrKAz2GU31DJ17+sn9ONroV1EU7lxy2VkR/ytD1RXvUUPvGqRM3Rec3o1vZ7iYJ3Yz3TbNitvfKxl1lM95D39hEzThaN7OI0ZPPRV/L2rFuhUTWxNda3kW6HUaWCd2qM7m08MAxTDzGLGPOIeZqw6aVYj3STddX4m6J6BbpFh/7Ero10+K7iXNyu1+tVtU8r66UbtHCl6KkrJ6t285Mk8F1OnZ7eVNdMd3ic3CSgbJ6tm7r6WkakTzUba/WPP0XdZtb1ToLPK+KbvptdX0muoGyerZueqtMLJIac3Z+fdgvDO16sCq66WPV7OlAL+vP1u00dasIrdSRvjhYLd0OVf3iXyI8WzfdNPtFvZiuXa19wbydzs0xQrW8QfKp9HtEN/N2qndhGJcqce2GtV8t3eZ+nVfIRWevtKSP6GZPMxuuvRd10o8keiNdMd3sl4wjauscb1OGGOVMy+FwnbbKx3SLDhyD3V19p4OovxlBZW+1dHOGNuZoV7Ufe+IzMUX7iG6uc5SbpW/vmWsUKrXjZsJTtnmubk55LmbTECs6cB7Pt9nvdVgW2/HHhCQrpJuzmw5t065o8Vc1UvJx3czGbDlVh+Dk+8Jmaal0s5/0ByndUmmFZW0jjm87EVnRfuN8DRmOFuq2ERvHKbdnn1Yn+uVGeWn2hXaRsC8/HXVlt0p1kfwXMW6/NGg2B6VC8iUT1v1ys9ks1ajYSfmz/pP27cIRrAeHyRf8yhBV5YI7Ox5mBREvPYBlBFNDiCeUe5awanKLx325T3tTDp4c0UuiBhh8OLu4+DA7ytS1CLz35+fvg0BVu6Y5NtGBunB09sEJXJFwIpyktesEuNnHYNG9jBH8qBH9kmHdHBXy5a+tXy+feL7dUauVrz/ha58cIfaHPQmnO221Jo86wmO5hqPP2V48INd+6LeuxKJ/zhJp6XZHUn7qRgnkzM01mAb7Ldm6dJIPQKSt8bOb9/1JHXdboIqxFuK65bfe/tOI/gfU/HIuEe6VWpeE4xr5aM2jKvrNCdV3P0k5quvFy9W2UeCuXo6E2Ee4V3SpZ7NaN42tqhFKt1BOusJ1A+Ma93CNrbZG7TuM6G22803pFiJcDNnr1ut1qOIG9W63J1wRBPU6CljWuiMfuiFYNNXrHgoChW5AyvRQCijqKyTuJTnqUX90d70uCgEckMc6CdrNS+jmOAEZ1WGi7tHF37ob1lDH6JZ1lG70rM+n+fw1KXkxHeV/I00+oub3AFlndRPe7/n89BWSxPuiCsiU6/xoeu6YfFPz9PN0NL2m7DpD/9+giCp8CSLd8Gi8E/T/gKrgyzQ/PcPTgqP89DMNZDl024du+xTut5YvbwIocdYKw1sPCbeWl/64R/N0RPMU88r7GvqjVxDXu5Myf0Zz7SYMW9+sbj9oer1F/xvKrvct6d8GLjny5V1SN1GfoD8eAByFITkKxD3y9dxZGt2udL4J9xuGa8L15S2lGXSTY5qoVjenN0a4a5inSrcLOnXcSz+fyjfxFnK9w7pFuslbD93O8jK8o8RTumGhdLRuUMu7hW4XtGre4P7faFVbBt0EdJMhrW/INylvaIlGuCHSJHC1bq7Afhr6nxCua3QTDtLEz3+k7LoJpc037KcCKiPf/HcOMhcPgBxh5mM7uCNJoFuI9U24Rjdsw3chJS49AOVoSdY3o1vgeQK6hfceCircXuAFF6RbHYXvI+mPvguvV1e6eYGoQ7fWWoC2e4lwqUC6/fACT/xA4t17wvN+wuMfPS9wfpJuHtpwDpGT7zDukm5rKHh/4gH8FEHPU7phIMG7cEl080fj8cl4EmLxH4OJROFEF/w81Zz4vmx9pZKPqq8wHuMgFqoaSConZI2clBM0nUz8RP8RGVONTzVj2ZJ5VcBdWxNyjS1HFai/T/3hcRl0Q5qEUsoQDxkKUAHxS/rhSyohdl+1oUES+OmTOX6iAcHiSvekS8JHpfpLGjv89JW/UNtJ24VcwzoMTYtU1pnXTaj3BVJG/ZH6j75UukhTL7WFr0vSWGpRdWN86c9Z+36qWdfJyCTqZXyTgNnX7RJnq8wxzbZumKZu75VizfDKspZg9jptOdv4t6wfMPZeWpknyOx3rqyOyyKc6OU7Syz+/0kMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzBLyF8mxseixHQW5QAAAABJRU5ErkJggg==" alt="" className="LogoEmpresa" />
        </div>
        
    </main>
    </>
   
  )
}

export default App
