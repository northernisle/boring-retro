import {
  Accordion,
  AccordionItem,
  Button,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  StyleProps,
} from '@chakra-ui/react';

interface CollapseProps extends StyleProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Collapse = ({ title, children, ...rest }: CollapseProps) => {
  return (
    <Accordion allowToggle {...rest}>
      <AccordionItem border='none'>
        <Button as={AccordionButton} variant='outline' w='full'>
          <Box flex='1' textAlign='left'>
            {title}
          </Box>
          <AccordionIcon />
        </Button>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Collapse;
