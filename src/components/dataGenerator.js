import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { styled } from '@mui/material/styles';
import SocialLinks from './SocialLinks';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Box, 
  Paper, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '1000px',
  margin: '20px auto',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  '& .MuiAccordionSummary-root': {
    backgroundColor: theme.palette.grey[50],
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    }
  }
}));

const PreviewPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxHeight: '400px',
  overflow: 'auto',
  backgroundColor: theme.palette.grey[50],
}));

const ControlsBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}));

const DataGenerator = () => {
  const [selectedFields, setSelectedFields] = useState({
        // Personal Information
        firstName: true,
        lastName: true,
        MiddleName: false,
        Gender: false,
        DOB: false,
        Age: false,
        Bio: false,
        Avatar: false,
    
        // Contact Information
        Email: false,
        Phone: false,
        Address: false,
        StreetAddress: false,
        City: false,
        State: false,
        ZipCode: false,
        Country: false,
    
        // Professional Information
        Company: false,
        JobTitle: false,
        Department: false,
        Salary: false,
        JobArea: false,
    
        // Internet & Tech
        Username: false,
        Password: false,
        Website: false,
        IpAddress: false,
        UserAgent: false,
        MACAddress: false,
        
        // Financial
        CreditCardNumber: false,
        CreditCardCVV: false,
        BitcoinAddress: false,
        BankAccount: false,
        RoutingNumber: false,
        
        // Vehicle
        Vehicle: false,
        Manufacturer: false,
        VIN: false,
        LicensePlate: false,
        Fuel: false,
        Model: false,
        Type: false,
        
        // Other
        Color: false,
        TimeZone: false,
        Locale: false,
      });
    
      const [expandedPanel, setExpandedPanel] = useState(false);
      const [userCount, setUserCount] = useState(10);
      const [outputFormat, setOutputFormat] = useState('json');
      const [generatedData, setGeneratedData] = useState([]);
    
      const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : false);
      };
    
      // Calculate selected fields count for each category
      const getSelectedCount = (fields) => {
        return fields.reduce((count, field) => selectedFields[field] ? count + 1 : count, 0);
      };
    
      const generateData = () => {
        const data = [];
        for (let i = 0; i < userCount; i++) {
          const user = {};
          
          // Personal Information
          if (selectedFields.firstName) user.first_name = faker.person.firstName();
          if (selectedFields.lastName) user.last_name = faker.person.lastName();
          if (selectedFields.MiddleName) user.middle_name = faker.person.middleName();
          if (selectedFields.Gender) user.gender = faker.person.sex();
          if (selectedFields.DOB) user.dob = faker.date.birthdate().toISOString().split('T')[0];
          if (selectedFields.Age) user.age = faker.number.int({ min: 18, max: 80 });
          if (selectedFields.Bio) user.bio = faker.person.bio();
          if (selectedFields.Avatar) user.avatar = faker.image.avatar();
    
          // Contact Information
          if (selectedFields.Email) user.email = faker.internet.email();
          if (selectedFields.Phone) user.phone = faker.phone.number();
          if (selectedFields.Address) user.address = faker.location.streetAddress();
          if (selectedFields.StreetAddress) user.street_address = faker.location.street();
          if (selectedFields.City) user.city = faker.location.city();
          if (selectedFields.State) user.state = faker.location.state();
          if (selectedFields.ZipCode) user.zip_Code = faker.location.zipCode();
          if (selectedFields.Country) user.country = faker.location.country();
    
          // Professional Information
          if (selectedFields.Company) user.company = faker.company.name();
          if (selectedFields.JobTitle) user.job_title = faker.person.jobTitle();
          if (selectedFields.Department) user.department = faker.commerce.department();
          if (selectedFields.Salary) user.salary = faker.number.int({ min: 30000, max: 150000 });
          if (selectedFields.JobArea) user.job_area = faker.person.jobArea();
    
          // Internet & Tech
          if (selectedFields.Username) user.username = faker.internet.userName();
          if (selectedFields.Password) user.password = faker.internet.password();
          if (selectedFields.Website) user.website = faker.internet.url();
          if (selectedFields.ipAddress) user.ip_address = faker.internet.ip();
          if (selectedFields.UserAgent) user.user_agent = faker.internet.userAgent();
          if (selectedFields.MACAddress) user.mac_address = faker.internet.mac();
    
          // Financial
          if (selectedFields.CreditCardNumber) user.credit_card_number = faker.finance.creditCardNumber();
          if (selectedFields.CreditCardCVV) user.credit_card_CVV = faker.finance.creditCardCVV();
          if (selectedFields.BitcoinAddress) user.bitcoin_address = faker.finance.bitcoinAddress();
          if (selectedFields.BankAccount) user.bank_account = faker.finance.accountNumber();
          if (selectedFields.RoutingNumber) user.routing_number = faker.finance.routingNumber();
    
          // Vehicle
          if (selectedFields.Vehicle) user.vehicle = faker.vehicle.vehicle();
          if (selectedFields.Manufacturer) user.manufacturer = faker.vehicle.manufacturer();
          if (selectedFields.VIN) user.vin = faker.vehicle.vin();
          if (selectedFields.LicensePlate) user.license_plate = faker.vehicle.vrm();
          if (selectedFields.Fuel) user.fuel = faker.vehicle.fuel();
          if (selectedFields.Model) user.model = faker.vehicle.model();
          if (selectedFields.Type) user.type = faker.vehicle.type();
     
          // Other
          if (selectedFields.Color) user.color = faker.color.human();
          if (selectedFields.TimeZone) user.time_zone = faker.location.timeZone();
          data.push(user);
        }
        setGeneratedData(data);
      };
      const convertToSQL = (data) => {
        if (data.length === 0) return '';
        
        const tableName = 'mock_users';
        const columns = Object.keys(data[0]);
        
        // Create table statement
        let sql = `CREATE TABLE ${tableName} (\n`;
        sql += columns.map(col => {
          let type = 'VARCHAR(255)';
          if (col === 'age' || col === 'salary') type = 'INT';
          if (col === 'dob') type = 'DATE';
          return `  ${col} ${type}`;
        }).join(',\n');
        sql += '\n);\n\n';
    
        // Insert statements
        data.forEach(row => {
          const values = columns.map(col => {
            const value = row[col];
            if (value === null || value === undefined) return 'NULL';
            if (typeof value === 'number') return value;
            return `'${value.replace(/'/g, "''")}'`;
          });
          
          sql += `INSERT INTO ${tableName} (${columns.join(', ')})\nVALUES (${values.join(', ')});\n`;
        });
    
        return sql;
      };
    
      const convertToFirebase = (data) => {
        const firebaseData = {
          users: data.reduce((acc, user, index) => {
            acc[`user_${index + 1}`] = user;
            return acc;
          }, {})
        };
        return JSON.stringify(firebaseData, null, 2);
      };
    
      const convertToXML = (data) => {
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<users>\n';
        
        data.forEach((user, index) => {
          xml += `  <user id="${index + 1}">\n`;
          Object.entries(user).forEach(([key, value]) => {
            xml += `    <${key}>${value}</${key}>\n`;
          });
          xml += '  </user>\n';
        });
        
        xml += '</users>';
        return xml;
      };
    
      const convertToExcel = (data) => {
        if (data.length === 0) return '';
        
        const columns = Object.keys(data[0]);
        let csv = columns.join('\t') + '\n';
        
        data.forEach(row => {
          csv += columns.map(col => {
            const value = row[col];
            if (value === null || value === undefined) return '';
            return value.toString().replace(/\t/g, ' ');
          }).join('\t') + '\n';
        });
        
        return csv;
      };
    
    const downloadData = () => {
        let content = '';
        let filename = 'mock-data';
        let mimeType = 'text/plain';
    
        switch (outputFormat) {
          case 'json':
            content = JSON.stringify(generatedData, null, 2);
            filename += '.json';
            mimeType = 'application/json';
            break;
          case 'csv':
            const headers = Object.keys(generatedData[0]);
            content = headers.join(',') + '\n';
            content += generatedData.map(row => 
              headers.map(header => {
                const value = row[header];
                return value ? `"${value.toString().replace(/"/g, '""')}"` : '';
              }).join(',')
            ).join('\n');
            filename += '.csv';
            mimeType = 'text/csv';
            break;
          case 'sql':
            content = convertToSQL(generatedData);
            filename += '.sql';
            mimeType = 'application/sql';
            break;
          case 'firebase':
            content = convertToFirebase(generatedData);
            filename += '.json';
            mimeType = 'application/json';
            break;
          case 'excel':
            content = convertToExcel(generatedData);
            filename += '.xls';
            mimeType = 'application/vnd.ms-excel';
            break;
          case 'xml':
            content = convertToXML(generatedData);
            filename += '.xml';
            mimeType = 'application/xml';
            break;
          default:
            content = JSON.stringify(generatedData, null, 2);
            filename += '.json';
            mimeType = 'application/json';
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      };
    
      const fieldCategories = {
        'Personal Information': ['FirstName', 'LastName', 'MiddleName', 'Gender', 'DOB', 'Age', 'Bio', 'Avatar'],
        'Contact Information': ['Email', 'Phone', 'Address', 'StreetAddress', 'City', 'State', 'ZipCode', 'Country'],
        'Professional Information': ['Company', 'JobTitle', 'Department', 'Salary', 'JobArea'],
        'Internet & Tech': ['Username', 'Password', 'Website', 'ipAddress', 'UserAgent', 'MACAddress'],
        'Financial': ['CreditCardNumber', 'CreditCardCVV', 'BitcoinAddress', 'BankAccount', 'RoutingNumber'],
        'Vehicle': ['Vehicle', 'Manufacturer', 'Fuel', 'Model', 'Type', 'VIN', 'LicensePlate'],
        'Other': ['Color', 'TimeZone', 'Locale']
      };
    



      return (
        <StyledCard>
          <CardContent>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              marginBottom={4}
              sx={{
                fontWeight: 'bold',
                fontSize: 34,
                color: (theme) => theme.palette.primary.main
              }}
            >
              Mock User Data Generator
            </Typography>
            
            <Typography
          variant="body2"
          align="center"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            maxWidth: '600px',
            margin: '0 auto',
            mb: 4,
            lineHeight: 1.6
          }}
        >
          Generate realistic mock user data for testing and development. Select desired fields, 
          choose output format, and instantly create customized datasets with features like personal information, 
          contact details, professional data, and more.
        </Typography>

            <ControlsBox>
              <TextField
                type="number"
                label="Number of Users"
                value={userCount}
                onChange={(e) => setUserCount(parseInt(e.target.value) || 1)}
                sx={{
                  width: 150,
                  '& .MuiInputBase-input': {
                    height: '1.4375em',
                  }
                }}
                InputProps={{ inputProps: { min: 1, max: 1000 } }}
              />
              
              <FormControl
                sx={{
                  width: 150,
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: (theme) => theme.palette.primary.main,
                    }
                  }
                }}
              >
                <InputLabel>Output Format</InputLabel>
                <Select
                  value={outputFormat}
                  onChange={(e) => setOutputFormat(e.target.value)}
                  label="Output Format"
                >
                  <MenuItem value="json">JSON</MenuItem>
                  <MenuItem value="csv">CSV</MenuItem>
                  <MenuItem value="sql">SQL</MenuItem>
                  <MenuItem value="firebase">Firebase</MenuItem>             
                  <MenuItem value="excel">Excel</MenuItem>             
                  <MenuItem value="xml">XML</MenuItem>
                </Select>
              </FormControl>
            </ControlsBox>
    
            {Object.entries(fieldCategories).map(([category, fields]) => (
              <StyledAccordion
                key={category}
                expanded={expandedPanel === category}
                onChange={handleAccordionChange(category)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center'
                    }
                  }}
                >
                  <Typography>{category}</Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      marginRight: 2
                    }}
                  >
                    {getSelectedCount(fields)} selected
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: '1fr 1fr',
                      md: '1fr 1fr 1fr'
                    },
                    gap: 2
                  }}>
                    {fields.map((field) => (
                      <FormControlLabel
                        key={field}
                        control={
                          <Checkbox
                            checked={selectedFields[field]}
                            onChange={(e) => 
                              setSelectedFields(prev => ({...prev, [field]: e.target.checked}))}
                            sx={{
                              '&.Mui-checked': {
                                color: (theme) => theme.palette.primary.main,
                              }
                            }}
                          />
                        }
                        label={field.replace(/([A-Z])/g, ' $1').trim()}
                      />
                    ))}
                  </Box>
                </AccordionDetails>
              </StyledAccordion>
            ))}
    
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 3,
              flexWrap: 'wrap'
            }}>
              <Button 
                variant="contained"
                onClick={generateData}
                sx={{
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.dark,
                  }
                }}
              >
                Generate Data
              </Button>
              {generatedData.length > 0 && (
                <Button 
                  variant="outlined"
                  onClick={downloadData}
                  startIcon={<DownloadIcon/>}
                  sx={{
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                    }
                  }}
                >
                  Download {outputFormat.toUpperCase()}
                </Button>
              )}
            </Box>
    
            {generatedData.length > 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Preview:
                </Typography>
                <PreviewPaper>
                  <pre style={{ margin: 0 }}>
                    {JSON.stringify(generatedData.slice(0, 3), null, 2)}
                    {generatedData.length > 3 && '\n...'}
                  </pre>
                </PreviewPaper>
              </Box>
            )}
            <SocialLinks />
          </CardContent>
        </StyledCard>
      );
    };
    
    export default DataGenerator;