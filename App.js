import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { styles } from "./AppStyle.js";

const CurrencyConverter = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [convertedResult, setConvertedResult] = useState(null);
  const [conversionError, setConversionError] = useState(null);

  const performCurrencyConversion = useCallback(() => {
    if (!inputAmount) {
      setConvertedResult(null);
      return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`)
      .then((response) => response.json())
      .then((exchangeData) => {
        const currencyRates = exchangeData.rates;
        const conversionRate = currencyRates[targetCurrency];

        if (conversionRate) {
          const calculatedResult = parseFloat(inputAmount) * conversionRate;
          setConvertedResult(calculatedResult.toFixed(2));
          setConversionError(null);
        } else {
          setConvertedResult(null);
          setConversionError("Invalid currency selection");
        }
      })
      .catch((error) => {
        console.error("Currency conversion error:", error);
        setConversionError("Network or conversion error");
      });
  }, [inputAmount, sourceCurrency, targetCurrency]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        const currencyList = Object.keys(data.rates);
        setAvailableCurrencies(currencyList);
      })
      .catch((error) => {
        console.error("Currency data fetch error:", error);
      });
  }, []);

  useEffect(() => {
    performCurrencyConversion();
  }, [performCurrencyConversion]);

  const switchCurrencies = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.header}>Currency Converter</Text>
        
        <Text style={styles.label}>Amount:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputAmount}
            onChangeText={(text) => setInputAmount(text)}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor="#999"
          />
        </View>
        
        <Text style={styles.label}>From Currency:</Text>
        <View style={styles.inputContainer}>
          <ModalDropdown
            style={styles.dropdown}
            options={availableCurrencies}
            defaultValue={sourceCurrency}
            onSelect={(index, value) => setSourceCurrency(value)}
          />
        </View>
        
        <TouchableOpacity
          style={styles.swapButton}
          onPress={switchCurrencies}
        >
          <Text style={styles.swapButtonText}>&#8646;</Text>
        </TouchableOpacity>
        
        <Text style={styles.label}>To Currency:</Text>
        <View style={styles.inputContainer}>
          <ModalDropdown
            style={styles.dropdown}
            options={availableCurrencies}
            defaultValue={targetCurrency}
            onSelect={(index, value) => setTargetCurrency(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.convertButton}
          onPress={performCurrencyConversion}
        >
          <Text style={styles.convertButtonText}>Convert</Text>
        </TouchableOpacity>

        {convertedResult !== null && (
          <Text style={styles.result}>
            {inputAmount} {sourceCurrency} is {convertedResult} {targetCurrency}
          </Text>
        )}

        {conversionError && (
          <Text style={[styles.result, { color: 'red' }]}>
            {conversionError}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CurrencyConverter;