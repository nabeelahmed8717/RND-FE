import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { Box, Grid, InputAdornment, TextField } from '@mui/material'
// import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";

import { newsLetterData } from '../../common/mockData/newsLetter/newsLetterData';
import SubscribedUser from './subscribedUsers/SubscribedUser';
import CheckCheckedIcon from '../../assets/icons/common/CheckChecked';
import CheckUnCheckedIcon from '../../assets/icons/common/CheckUnChecked';
import AddNewsLetter from './addNewsLetter/AddNewsLetter';
import EditNewsletter from './editNewsletter/EditNewsletter';
import SearchIcon from "../../assets/icons/guideLines/SearchIcon.png";

import ribbonNew from "../../assets/images/newsLetter/newsRibbons/new.svg";
import ribbonComingSoon from "../../assets/images/newsLetter/newsRibbons/comingSoon.svg";

import { displayToastr } from '../../redux/toaster/toasterSlice';
import { useAppDispatch } from '../../hooks/use-store.hooks';

import { useAppSelector } from "../../hooks/use-store.hooks";
import { useDispatch } from "react-redux";

import { apiGetRequest } from '../../helpers/request';

const NewsLetter = () => {
    // const dispatch = useAppDispatch();

    const dispatch = useDispatch();

    const [screenToShow, setScreenToShow] = useState("newsLetterTable");
    const [newsLetterGetData, setNewsLetterGetData] = useState([]);
    const [newsLetterDataArray, setNewsLetterDataArray] = useState<any>(newsLetterGetData);
    const [updatedNewsLetterDataArray, setupdatedNewsLetterDataArray] = useState<any>([]);
    const [subscribedUserMainData, setSubscribedUserMainData] = useState([])
    const [filterString, setfilterString] = useState<string>("");
    const filteredData = filterString ? updatedNewsLetterDataArray : newsLetterDataArray;
    const [selectedUserArray, setSelectedUserArray] = useState<any>([])
    const [selectedAddNewsLetter, setSelectedAddNewsLetter] = useState<any>([])
    const selectedNewsLetterArray = newsLetterDataArray.filter((item) => item.isChecked === true)
    const [isCheckedNewsLetter, setIsCheckedNewsLetter] = useState(false);
    console.log(newsLetterDataArray, 'newsLetterDataArray');
    
    const router = useRouter();
    const { postID } = router.query;
    const isNameExists = postID?.length;

    const newsLetterGet = async () => {
        const response = await apiGetRequest(`/newsletters`);
        console.log(response.data.data, 'response.data.data');
        setNewsLetterGetData(response.data.data);
    }

    const handleClientRedirect = (event: any) => {
        router.push({
            pathname: "/newsLetter",
            query: { postID: event.id },
        });
    };

    const routerFilteredArray = newsLetterDataArray.filter((item: any) => item.id === postID);

    const searchNewsLetter = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const searchNewsletter = event.target.value.toLowerCase().trim();
        setfilterString(searchNewsletter);
        const filteredItem = newsLetterDataArray.filter((newsletter: any) =>
            newsletter.title.toLowerCase().includes(searchNewsletter)
        );
        setupdatedNewsLetterDataArray(filteredItem);
    };

    const toggleStatus = (id: number): void => {
        const result = newsLetterDataArray.map((item: any) => {
            if (item.id === id) {
                item.isChecked = !item.isChecked;
            }
            return item;
        });
        setNewsLetterDataArray(result);
    };

    const statusCheckAll = () => {

        setIsCheckedNewsLetter(!isCheckedNewsLetter)
        const newState = newsLetterDataArray.map(obj => {
            if (obj.id === obj.id) {
                if (isCheckedNewsLetter === true) {
                    return { ...obj, isChecked: false };
                }
                else if (isCheckedNewsLetter === false) {
                    return { ...obj, isChecked: true };
                }
                return obj;
            }
            return obj;
        })
        setNewsLetterDataArray(newState);

    }

    const handelNextHandler = () => {
        {
            // selectedNewsLetterArray.length ? setScreenToShow('subscribedUser') : dispatch(
            //     displayToastr({ isDisplay: true, alertType: "error", message: "You have to select atleast one to proceed" })
            // );
            setScreenToShow('subscribedUser')
        }
    }
    useEffect(() => {
    }, [selectedUserArray, selectedNewsLetterArray, setSelectedUserArray])

    useEffect(() => {
        newsLetterGet();
    }, []);

    return (
        <>
            {screenToShow === "newsLetterTable" && <div className='wrapper-main-newsletter '>
                {!isNameExists && <div className="wrapper-inner-newsletter bg-white-shadow">
                    <span className="fw-700 fs-36 primary-color font-source-sans-pro lh-32">
                        Newsletters
                    </span>
                    <Grid className='flex justify-between' sx={{ mt: '30px', gap: '20px', flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "row", lg: "row" } }}>
                        <Grid sx={{ width: { xs: "100%", sm: "100%", md: "235px", lg: "400px" }, height: "54px" }}>
                            <TextField
                                placeholder="search"
                                className="search-collaborator border-radiues-3 mb-15"
                                onChange={searchNewsLetter}
                                sx={{
                                    width: { xs: "100%", sm: "100%", md: "400px", lg: "400px" },
                                    height: "54px",
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"
                                            sx={{
                                                width: "40px",
                                                marginRight: { sm: "1rem" },
                                            }}>
                                            <Image
                                                src={SearchIcon}
                                                alt="search"
                                                priority
                                                width={24}
                                                height={24}
                                                objectFit="fill"
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid className='flex  align-center' sx={{ justifyContent: { xs: "Flex-end", sm: "flex-end", md: "flex-start", lg: "flex-start" }, flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }, gap: { xs: "10px", sm: "50px", md: "50px", lg: "50px", xl: "50px" } }}>

                            <Box className='custom-Checkbox-wrapper' display="flex" alignItems="center" gap="8px">
                                <input type="checkbox" id="checkall" className="remember-checkbox" checked={isCheckedNewsLetter}
                                    onChange={() => statusCheckAll()} />
                                <label htmlFor="checkall" className="cursor-pointer checkbox-label">Select All</label>
                            </Box>

                            <Grid className='flex gap-10' >
                                <button className='header-buttons cursor-pointer font-source-sans-pro common-button-hover add-btn' onClick={() => setScreenToShow('addNewsLetter')}>Add</button>
                                <button className='header-buttons cursor-pointer font-source-sans-pro common-button-hover next-btn' onClick={handelNextHandler}>Next</button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <div className='wrapper-newsletter-content'>
                        {newsLetterGetData?.map((item: any) =>
                            <div className="wrap-cards" key={item.id}>
                                <div className="card-news-letter  cursor-pointer" onClick={() => handleClientRedirect(item)}>
                                    <div className="card-thumbnail">
                                        <div className='news-ribbon'>
                                            {(() => {
                                                switch (item?.ribbon) {
                                                    case "new":
                                                        return (
                                                            <Image src={ribbonNew} priority alt="" />
                                                        );
                                                    case "comingSoon":
                                                        return (
                                                            <Image src={ribbonComingSoon} priority alt="" />
                                                        );
                                                    default:
                                                        return null;
                                                }
                                            })()}
                                        </div>
                                        <Image src={item.image ? item.image : URL.createObjectURL(item.image)} width={244} height={163} alt="newsLetter Thumbnail" priority />
                                    </div>
                                    <div className="card-text fs-14 fw-600 text-center">
                                        <span
                                            dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                    </div>
                                </div>
                                <div className="abs-checkbox cursor-pointer" onClick={() => toggleStatus(item.id)}>
                                    {item.isChecked ? <CheckCheckedIcon /> : <CheckUnCheckedIcon />}
                                </div>
                            </div>
                        )}

                    </div>

                </div>}
                {isNameExists &&
                    <>
                        {routerFilteredArray.length && routerFilteredArray.map((item: any, i: number) =>
                            <div className='wrapper-inner-newsletter bg-white-shadow' key={i}>
                                <div className="wrapper-newspost-details">
                                    <div className="post-thumbnail flex justify-center ">
                                        <Image src={item.image ? item.image : URL.createObjectURL(item.image)} width={244} height={163} alt="PostImage" priority />
                                    </div>

                                    <h3 className='post-content-header fs-24 fw-700'>
                                        <span
                                            dangerouslySetInnerHTML={{ __html: item.title }}
                                        />
                                    </h3>
                                    <div className="post-content">
                                        <span className=''
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                    </div>

                                    <button className='back-button' onClick={() => router.push({
                                        pathname: "/newsLetter",
                                    })} >Back</button>

                                </div>

                            </div>
                        )}
                    </>
                }
            </div>}


            {screenToShow === "subscribedUser" &&
                <SubscribedUser
                    setScreenToShow={setScreenToShow}
                    selectedNewsLetterArray={selectedNewsLetterArray}
                    setSelectedUserArray={setSelectedUserArray}
                    selectedAddNewsLetter={selectedAddNewsLetter}
                    setSubscribedUserMainData={setSubscribedUserMainData}
                />}

            {screenToShow === "addNewsLetter" &&
                <AddNewsLetter
                    setScreenToShow={setScreenToShow}
                    setNewsLetterDataArray={setNewsLetterDataArray}
                    newsLetterDataArray={newsLetterDataArray}
                    setSelectedAddNewsLetter={setSelectedAddNewsLetter}
                    selectedAddNewsLetter={selectedAddNewsLetter}
                />}


            {screenToShow === "editNewsLetter" &&
                <EditNewsletter
                    setScreenToShow={setScreenToShow}
                    selectedUserArray={selectedUserArray}
                    setSelectedUserArray={setSelectedUserArray}
                    selectedNewsLetterArray={selectedNewsLetterArray}
                    selectedAddNewsLetter={selectedAddNewsLetter}
                    subscribedUserMainData={subscribedUserMainData}
                />}

        </>
    )
}

export default NewsLetter