import PropTypes from 'prop-types';
import CheckVerified01 from '@untitled-ui/icons-react/build/esm/CheckVerified01';
import Star01Icon from '@untitled-ui/icons-react/build/esm/Star01';
import Users01Icon from '@untitled-ui/icons-react/build/esm/Users01';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { RouterLink } from 'src/components/router-link';
import { paths } from 'src/paths';
import { getInitials } from 'src/utils/get-initials';
import { CompanyJobs } from './company-jobs';

export const CompanyCard = (props) => {
  const { jobPostData, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          spacing={2}
          direction={{
            xs: 'column',
            sm: 'row'

          }}
          sx={{display:"flex", alignItems:"center"}}
        >
          <Avatar
            // component={RouterLink}
            // href={paths.dashboard.jobs.companies.details}
            src={jobPostData.image}
            variant="rounded"
       
          >
            {getInitials(jobPostData.designation)}
          </Avatar>
          <div>
            <Link
              color="text.primary"
              // component={RouterLink}
              // href={paths.dashboard.jobs.companies.details}
              variant="h6"
            >
              {jobPostData.designation}
            </Link>
         
          </div>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <CompanyJobs job={jobPostData} />
        </Box>
      </CardContent>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};
