import { format, subDays, subHours, subMinutes, subSeconds } from 'date-fns';
import numeral from 'numeral';
import DotsHorizontalIcon from '@untitled-ui/icons-react/build/esm/DotsHorizontal';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const now = new Date();

const products = [
    { id: 1, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'A Grade' },
    { id: 2, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Comm Grade' },
    { id: 3, name: 'White Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Unsortex' },
    { id: 4, name: 'White Onion Chopped 3-5 mm', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 5, name: 'White Onion Chopped 3-5 mm', packagingSize: '20 Kgs', grade: 'Comm Grade' },
    { id: 6, name: 'White Onion Minced 2-4 mm', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 7, name: 'White Onion Minced 1-3 mm', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 8, name: 'White Onion Minced 1-3 mm', packagingSize: '20 Kgs', grade: 'Comm Grade' },
    { id: 9, name: 'White Onion Granules 0.5-1 mm', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 10, name: 'White Onion Granules 0.2-0.5 mm', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 11, name: 'White Onion Granules 40-80 Mesh', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 12, name: 'White Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 13, name: 'White Onion Powder', packagingSize: '25 Kgs', grade: 'Comm Grade' },
    { id: 14, name: 'Red Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Sortex' },
    { id: 15, name: 'Red Onion Flakes/Kibbled', packagingSize: '14 Kgs', grade: 'Unsortex' },
    { id: 16, name: 'Red Onion Minced', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 17, name: 'Red Onion Chopped', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 18, name: 'Red Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 19, name: 'Pink Onion Flakes', packagingSize: '14 Kgs', grade: 'Sortex' },
    { id: 20, name: 'Pink Onion Flakes', packagingSize: '14 Kgs', grade: 'Unsortex' },
    { id: 21, name: 'Pink Onion Minced', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 22, name: 'Pink Onion Chopped', packagingSize: '20 Kgs', grade: 'A Grade' },
    { id: 23, name: 'Pink Onion Powder', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 24, name: 'Garlic Flakes/Clove', packagingSize: '25 Kgs', grade: 'Sortex' },
    { id: 25, name: 'Garlic Flakes/Clove', packagingSize: '25 Kgs', grade: 'Unsortex' },
    { id: 26, name: 'Garlic Chopped 3-5 mm', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 27, name: 'Garlic Minced 1-3 mm', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 28, name: 'Garlic Granules 0.5-1 mm', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 29, name: 'Garlic Granules 0.2-0.5 mm', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 30, name: 'Garlic Granules 40-80 Mesh', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 31, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'Premium' },
    { id: 32, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'A Grade' },
    { id: 33, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'Comm Grade' },
    { id: 34, name: 'Garlic Powder', packagingSize: '25 Kgs', grade: 'B Grade' },
  ];


export const ProductTable = () => (
  <Box border={'solid'} borderRadius={'20px'}>
    <Card>
      <CardHeader
        title="Dehydared Onion & Garlic Products"
        style={{textAlign: 'center'}}
      />
      <Divider />
      <Scrollbar>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{border: 'solid', fontWeight: 'bolder'}}>
                Product Name
              </TableCell>
              <TableCell style={{border: 'solid', fontWeight: 'bolder', textAlign: 'center'}}>
                Packaging Size
              </TableCell>
              <TableCell style={{border: 'solid', fontWeight: 'bolder', textAlign: 'center'}}>
                Grade
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => {

              return (
                <TableRow
                  hover
                  key={product.id}
                >
                  <TableCell style={{border: 'solid'}}>
                    <Typography variant="subtitle2">
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell style={{border: 'solid' , textAlign: 'center'}}>
                    {product.packagingSize}
                  </TableCell>
                  <TableCell style={{border: 'solid' , textAlign: 'center'}}>
                    {product.grade}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  </Box>
);
