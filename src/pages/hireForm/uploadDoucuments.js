import React, { useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { FileDropzone } from "src/components/file-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { usePageView } from "src/hooks/use-page-view";

const UploadDoucuments = ({setDocuments,documents}) => {
  usePageView();
  const convertHexToImage = (hex) => {
    if (!hex) {
      return null;
    }
    if (Array.isArray(hex)) {
      return hex.map((item) => convertHexToImage(item));
    }
    const hexWithoutPrefix = hex.hexString.startsWith("0x")
      ? hex.hexString.slice(2)
      : hex.hexString;
    const bytes = new Uint8Array(
      hexWithoutPrefix.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
    const blob = new Blob([bytes], { type: "application/octet-stream" });
    return URL.createObjectURL(blob);
  };

  const handleFilesDrop = useCallback((index, newFiles) => {
    setDocuments((prevDocuments) => {
      const updatedDocuments = [...prevDocuments];
      newFiles.forEach(async (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const arrayBuffer = reader.result;
          const byteArray = new Uint8Array(arrayBuffer);
          const hexString = Array.from(byteArray, (byte) =>
            byte.toString(16).padStart(2, "0")
          ).join("");

          const filename = file.name;
          const fileExtension = filename.split(".").pop();
          const updatedDocument = { ...updatedDocuments[index] };
          updatedDocument.files.push({ hexString, filename, fileExtension });
          updatedDocuments[index] = updatedDocument;
          setDocuments([...updatedDocuments]);
        };
        reader.readAsArrayBuffer(file);
      });
      return updatedDocuments;
    });
  }, []);

  const handleRemove = (index, fileIndex) => {
    setDocuments((prevDocuments) => {
      const updatedDocuments = [...prevDocuments];
      const updatedDocument = { ...updatedDocuments[index] };
      updatedDocument.files?.splice(fileIndex, 1);
      updatedDocuments[index] = updatedDocument;
      return updatedDocuments;
    });
  };

  return (
    <Box spacing={4}>
      {documents?.map((doc, index) => {
        return (
          <Stack alignItems="center" spacing={2} sx={{ mb: 5 }} key={index}>
            <FileDropzone
              onDrop={(newFiles) => handleFilesDrop(index, newFiles)}
              accept={{ "/*": [] }}
              caption="(SVG, JPG, PNG, or gif maximum 900x400)"
              sx={{
                "& .MuiBox-root": {
                  width: "100%",
                },
                width: "100%",
              }}
            ></FileDropzone>
            {doc.files.map((file, fileIndex) => (
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                key={fileIndex}
              >
                {file.fileExtension ? (
                  <PictureAsPdfIcon
                    color="primary"
                    sx={{ fontSize: 18, mr: 1 }}
                  />
                ) : (
                  <ImageIcon color="primary" sx={{ fontSize: 18, mr: 1 }} />
                )}
                <Typography
                  key={fileIndex}
                  color="primary"
                  sx={{ fontSize: 18, fontWeight: 600 }}
                >
                  {file.filename}
                </Typography>
                <Box
                  onClick={(fileIndex) => handleRemove(index, fileIndex)}
                  sx={{ cursor: "pointer", pl: 2 }}
                >
                  <CloseIcon color="primary" sx={{ pt: 1 }} />
                </Box>
              </Box>
            ))}
          </Stack>
        );
      })}
    </Box>
  );
};

export default UploadDoucuments;
