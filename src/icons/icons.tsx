import { TbArrowBackUp } from "react-icons/tb";
import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";


export  const bagIcon = <IconContext.Provider value={{size: "1.3rem"}}>
                          <SlBag/>
                        </IconContext.Provider>

export const searchIcon= <IconContext.Provider value={{size: "1.5rem"}}>
                            <IoSearchOutline/>
                          </IconContext.Provider>          
                          
export const arrowBack= <IconContext.Provider value={{}}>
                          <TbArrowBackUp/>
                        </IconContext.Provider>   

export const arrowDown =<IconContext.Provider value={{}}>
                            <MdKeyboardArrowDown/>
                          </IconContext.Provider>

export const arrowLeft =<IconContext.Provider value={{}}>
                          <MdKeyboardArrowLeft/>
                        </IconContext.Provider>
                        
export const arrowRight =<IconContext.Provider value={{}}>
                          <MdKeyboardArrowRight/>
                        </IconContext.Provider>

export const trashIcon = <IconContext.Provider value={{}}>
                            <FaRegTrashAlt/>
                          </IconContext.Provider>
