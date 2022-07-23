import { Box, Heading } from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Form() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Box>
      <Heading>Form</Heading>
      <Stack gap="0.5rem">
        <Box>
          <Input placeholder="Email" />
        </Box>
        <Box>
          <Input placeholder="password" />
        </Box>

        <Box>
          <HStack>
            <PinInput value={otp} onChange={(value) => setOtp(value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Box>

        <Text>{otp}</Text>

        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box>
          <Button
            bg="brand.900"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            isLoading={loading}
          >
            Button
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
