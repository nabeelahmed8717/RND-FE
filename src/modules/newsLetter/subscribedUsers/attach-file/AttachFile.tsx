import { Box, Typography } from "@mui/material";

import DummyPhoto from "../../../../assets/icons/common/imageUpload.svg";
import Image from "next/image";
import { useState } from "react";

// import { any,any } from '../../../constants/interface/global/global-interface';


// import './AttachFile.scss';

const AttachFile: React.FC<any> = (props: any) => {
  const [drag, setdrag] = useState<boolean>(false);
  const onSelectFile = (event: any) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray: any[] = selectedFilesArray.map((file: any) => {
      const obj: any = {
        id: props.imagesArray.length + Math.random(),
        imgPath: URL.createObjectURL(file),
        imgName: file.name,
        imgSize: file.size,
      };
      return obj;
    });
    if (props.multiple) {
      props.setImagesArray?.([...props.imagesArray, ...imagesArray]);
    } else {
      props.setImagesArray?.([...imagesArray]);
    }
    props.setimagNotUpload?.(false);
  };
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setdrag(true);
  };
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setdrag(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setdrag(true);
  };
  const handleDrop = (event: any) => {
    event.preventDefault();
    let files = [...event.dataTransfer.files];
    const imagesArray: any[] = files.map((file: any) => {
      const obj = {
        id: props.imagesArray.length,
        imgPath: URL.createObjectURL(file),
        imgName: file.name,
        imgSize: file.size,
      };
      return obj;
    });

    if (files) {
      if (props.multiple) {
        props.setImagesArray?.([...props.imagesArray, ...imagesArray]);
      } else {
        props.setImagesArray?.([...imagesArray]);
      }
    }
    setdrag(false);
    props.setimagNotUpload?.(false);
  };
  return (
    <>
      <div className="wrapper-attach-file font-source-sans-pro">
        <label htmlFor="imageInput" className="cursor-pointer">
          <Box
            onDragEnter={(e: React.DragEvent<HTMLDivElement>) => onDragEnter(e)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
              handleDragOver(e)
            }
            onDragLeave={onDragLeave}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
            className={`border-radius-4 border-dashed ${drag && "dragged "}`}
          >
            <Box
              sx={{ p: 2, py: 1, textAlign: "center" }}
              className="upload-container-height"
            >
              <input
                type="file"
                id="imageInput"
                onChange={onSelectFile}
                multiple={props.multiple}
                accept="image/png , image/jpeg, image/webp"
                style={{ display: "none" }}
              />
              <Box>
                <Image src={DummyPhoto} alt="search" priority />
              </Box>
              {props.imgName ? (
                <Box>
                  {
                    <Typography sx={{ fontSize: "12px" }}>
                      {props.imgName}
                    </Typography>
                  }
                </Box>
              ) : (
                <Box
                  sx={{
                    fontSize: props.fontSizeProp ? props.fontSizeProp : "12px",
                  }}
                >
                  <span className="font-source-sans-pro max-dull">
                    Drag and drop file
                  </span>
                </Box>
              )}
            </Box>
          </Box>
        </label>
      </div>
    </>
  );
};

export default AttachFile;
