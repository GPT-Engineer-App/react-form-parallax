import React, { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Select, Box, Text, FormControl, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([{ question: '', answer: '' }]);

  const handleAddItem = () => {
    setItems([...items, { question: '', answer: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = items.map((item, i) => (i === index ? { ...item, [field]: value } : item));
    setItems(newItems);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box bg="white" p={8} rounded="md" shadow="md" width="100%">
        <VStack spacing={4}>
          <FormControl id="test">
            <FormLabel>Test</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <NumberInput min={0}>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <FormControl id="items">
            <FormLabel>Items</FormLabel>
            {items.map((item, index) => (
              <HStack key={index} spacing={2} width="100%">
                <Input
                  placeholder="Question"
                  value={item.question}
                  onChange={(e) => handleItemChange(index, 'question', e.target.value)}
                />
                <Input
                  placeholder="Answer"
                  value={item.answer}
                  onChange={(e) => handleItemChange(index, 'answer', e.target.value)}
                />
                <Button onClick={() => handleRemoveItem(index)} colorScheme="red" size="sm" icon={<FaTrash />}>
                  <FaTrash />
                </Button>
              </HStack>
            ))}
            <Button onClick={handleAddItem} leftIcon={<FaPlus />} colorScheme="blue" size="sm">
              Add Item
            </Button>
          </FormControl>

          <FormControl id="precision">
            <FormLabel>Précision</FormLabel>
            <NumberInput precision={2} step={0.01}>
              <NumberInputField />
            </NumberInput>
          </FormControl>

          <HStack spacing={4}>
            <Button colorScheme="blue">Valider</Button>
            <Button colorScheme="gray">Annuler</Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;