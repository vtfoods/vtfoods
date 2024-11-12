import {
  Box,
  Card,
  CardHeader,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Scrollbar } from 'src/components/scrollbar';
import { useState } from 'react';

const now = new Date();

const products = [
    { id: 1, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'A Grade', image: '/assets/VT-logo.png' },
    { id: 2, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Comm Grade', image: '/assets/VT-logo.png' },
    { id: 3, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Unsortex', image: '/assets/VT-logo.png' },
    { id: 4, name: 'White Onion Chopped 3-5 mm', packagingSize: '20 Kgs', grade: 'A Grade', image: '/assets/VT-logo.png' },
    { id: 5, name: 'White Onion Chopped 3-5 mm', packagingSize: '20 Kgs', grade: 'Comm Grade' , image: '/assets/VT-logo.png'},
    { id: 6, name: 'White Onion Minced 2-4 mm', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 7, name: 'White Onion Minced 1-3 mm', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 8, name: 'White Onion Minced 1-3 mm', packagingSize: '20 Kgs', grade: 'Comm Grade' , image: '/assets/VT-logo.png'},
    { id: 9, name: 'White Onion Granules 0.5-1 mm', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 10, name: 'White Onion Granules 0.2-0.5 mm', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 11, name: 'White Onion Granules 40-80 Mesh', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 12, name: 'White Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 13, name: 'White Onion Powder', packagingSize: '25 Kgs', grade: 'Comm Grade' , image: '/assets/VT-logo.png'},
    { id: 14, name: 'Red Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Sortex' , image: '/assets/VT-logo.png'},
    { id: 15, name: 'Red Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Unsortex' , image: '/assets/VT-logo.png'},
    { id: 16, name: 'Red Onion Minced', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 17, name: 'Red Onion Chopped', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 18, name: 'Red Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 19, name: 'Pink Onion Flakes', packagingSize: '14 Kgs', grade: 'Sortex' , image: '/assets/VT-logo.png'},
    { id: 20, name: 'Pink Onion Flakes', packagingSize: '14 Kgs', grade: 'Unsortex' , image: '/assets/VT-logo.png'},
    { id: 21, name: 'Pink Onion Minced', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 22, name: 'Pink Onion Chopped', packagingSize: '20 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 23, name: 'Pink Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 24, name: 'Garlic Flakes/Clove', packagingSize: '25 Kgs', grade: 'Sortex' , image: '/assets/VT-logo.png'},
    { id: 25, name: 'Garlic Flakes/Clove', packagingSize: '25 Kgs', grade: 'Unsortex' , image: '/assets/VT-logo.png'},
    { id: 26, name: 'Garlic Chopped 3-5 mm', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 27, name: 'Garlic Minced 1-3 mm', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 28, name: 'Garlic Granules 0.5-1 mm', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 29, name: 'Garlic Granules 0.2-0.5 mm', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 30, name: 'Garlic Granules 40-80 Mesh', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 31, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'Premium' , image: '/assets/VT-logo.png'},
    { id: 32, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'A Grade' , image: '/assets/VT-logo.png'},
    { id: 33, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'Comm Grade' , image: '/assets/VT-logo.png'},
    { id: 34, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'B Grade' , image: '/assets/VT-logo.png'},
  ];
  
  export const ProductTable = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const handleClickOpen = (image) => {
      setSelectedImage(image);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedImage('');
    };
  
    return (
      <Box sx={{ borderRadius: '12px', overflow: 'hidden', boxShadow: 2, bgcolor: 'background.paper', mt: 4  }}>
        <Card>
          <CardHeader
            title="Dehydrated Onion & Garlic Products"
            sx={{ textAlign: 'center', color: 'black', py: 2, backgroundImage: 'url(/assets/table-cover.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', bgcolor: '#f5f3e7', borderBottom: 'solid' }}
          />
          <Divider />
          <Scrollbar>
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'grey.100',  borderBottom: 'solid' }}>
                  <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', textAlign: 'center', py: 1.5 }}>
                    Product Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', textAlign: 'center', py: 1.5 }}>
                    Packaging Size
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', textAlign: 'center', py: 1.5 }}>
                    Grade
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center', py: 1.5 }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    hover
                    key={product.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'grey.50',
                      },
                    }}
                  >
                    <TableCell sx={{ textAlign: 'center', py: 1.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center', py: 1.5 }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.packagingSize}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center', py: 1.5 }}>
                      <Typography variant="body2" sx={{ color: product.grade === 'A Grade' ? 'success.main' : 'warning.main' }}>
                        {product.grade}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center', py: 1.5 }}>
                      <IconButton onClick={() => handleClickOpen(product.image)}>
                        <VisibilityIcon sx={{ color: 'grey.500' }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
        </Card>
        
        {/* Image Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogContent>
            <Box sx={{ textAlign: 'center' }}>
              <img src={selectedImage} alt="Product" style={{ maxWidth: '100%', borderRadius: '8px' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>Product Description</Typography>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    );
  };