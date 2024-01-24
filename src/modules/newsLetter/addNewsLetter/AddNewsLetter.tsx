import { Box, Button, Divider, Fab, Grid, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react'
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Editor from './text-editor';
import { displayToastr } from '../../../redux/toaster/toasterSlice';
import { useAppDispatch } from '../../../hooks/use-store.hooks';
import Image from 'next/image';
import { fetchNewsLetter } from '../../../redux/newsLetter/newsLetterSlice';
const AddNewsLetter = ({ selectedAddNewsLetter, setSelectedAddNewsLetter, setScreenToShow, setNewsLetterDataArray, newsLetterDataArray, editNewsletter, setEditNewsletter }: any) => {


  const [selectedImage, setSelectedImage] = useState<any>({preview:'', raw:''});

  const [title, setTitle] = useState<any>("");
  const [name, setName] = useState<any>("");
  const [description, setDescription] = useState<any>("");

  const [addTitle, setAddTitle] = useState<any>();
  const [addName, setAddName] = useState<any>();
  const [addDescription, setAddDescription] = useState<any>();

  const dispatch = useAppDispatch();

  //For Custom Class

  const newsLetterData = {
    id: Math.random().toString(),
    head: title,
    image: selectedImage,
    content: title,
    newsLetterName: name,
    description,
    isChecked: false
  };

  

  // This function will be triggered when the file field change
  const imageChange = (e: any) => {
    setSelectedImage({
      preview:URL.createObjectURL(e.target.files[0]),
      raw:e.target.files[0]
    })
  };
  const updateNewsLetterPrvArrayHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setNewsLetterDataArray((object: any) => [...object, newsLetterData,]);
    setSelectedAddNewsLetter((object: any) => [...object, newsLetterData,]);
  }
console.log("title", selectedImage.raw)
// console.log("LENGTH",selectedImage.length)
  const pushNextHandler = (event: React.FormEvent) => {
    // setScreenToShow('newsLetterTable'); 
    

    if (!selectedImage || !title || !name || !description) {
      dispatch(
        displayToastr({ isDisplay: true, alertType: "error", message: "requried" })
      );
    } else {
      event.preventDefault();
      setNewsLetterDataArray((object: any) => [...object, newsLetterData,]);
      setSelectedAddNewsLetter((object: any) => [...object, newsLetterData,]);
      // setScreenToShow('subscribedUser');
    }
    const addNewsLetterForm = new FormData();
    addNewsLetterForm.append('title', title)
    addNewsLetterForm.append('name', name)
    addNewsLetterForm.append('description', description)
    addNewsLetterForm.append('image ', selectedImage.raw);
    console.log(addNewsLetterForm, 'addNewsLetterForm');
    const home = dispatch(fetchNewsLetter(addNewsLetterForm));
    console.log(home, 'home');

  }

  useEffect(() => {
  }, [selectedAddNewsLetter])
  // console.log('selectedAddNewsLetter',selectedAddNewsLetter)


  return (
    <Box className="AddNewsLetter-system-admin">
      <Box className="main">
        <h3 className="grey-color fs-20 line-height-24 fw-700 mt-0">Newsletter</h3>
        <Divider sx={{ mb: 3 }} />
        <>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                sx={{
                  minHeight: {
                    // xs: "490px",
                    // sm: "700px",
                    maxWidth: "1200px",
                    width: "100%",

                  },
                  marginBottom: "0px"
                }}
                mb={3}
              >
                <Box>
                  <div className="input_image_container">
                    <label htmlFor="upload-photo" className="upload_photo_wraper">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={imageChange}
                      />
                      <Fab
                        size="medium"
                        component="span"
                        aria-label="add"
                        disableFocusRipple
                        disableRipple
                        sx={{
                          backgroundColor: "#7FB341",
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          "&.MuiButtonBase-root:hover": {
                            backgroundColor: "#7FB341",
                          },
                        }}
                      >
                        <AddAPhotoIcon sx={{ color: "#fff" }} fontSize="medium"/>
                      </Fab>
                    </label>
                    {selectedImage.preview ? (
                      <Image
                        style={{ objectFit: "contain" }}
                        src={selectedImage.preview}
                        alt="NewsLetter Img"
                        layout='fill'
                      />
                    ) : (
                      <div className="default_bg"></div>
                    )}
                  </div>
                </Box>
                <Stack className="editor-box" spacing={2} sx={{ mt: 3 }}>
                  <Editor
                    setAddTitle={setAddTitle}
                    classname="add-title-here"
                    placeholder="Add Title here"
                    defaultvalue={title}
                    setValue={setTitle}
                  />
                  <Editor
                    setAddTitle={setAddName}
                    classname="add-name"
                    placeholder="Newsletter Name"
                    defaultvalue={name}
                    setValue={setName}
                  />
                  <Editor
                    setAddTitle={setAddDescription}
                    classname="add-description"
                    placeholder="Add description here"
                    defaultvalue={description}
                    setValue={setDescription}
                  />
                  <Box sx={{ display: "flex" }}></Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button
                  onClick={() => setScreenToShow('newsLetterTable')}
                  className='back-button'
                  style={{ marginRight: "4px" }}
                >
                  Back
                </button>
                <button
                  className="btn-submit-add-newsLetter bg-gradient-green fs-16 fw-700 cursor-pointer"
                  type="submit"
                  onClick={pushNextHandler}
                // onClick={updateNewsLetterPrvArrayHandler}
                >
                  Continue
                </button>
              </Box>
            </Grid>
          </Grid>
        </>
      </Box>
    </Box>
    // onClick={() => { func1(); func2();}}    newsLetterTable  subscribedUser

  )
}

export default AddNewsLetter