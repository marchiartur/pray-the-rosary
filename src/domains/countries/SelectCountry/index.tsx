import React, { type FunctionComponent, useCallback, useMemo } from 'react';

import styles from './index.module.css';
import { COUNTRIES_NAMESPACE, Countries, type CountryMapProps, type Country } from 'locales';
import useTranslation from 'next-translate/useTranslation';

import { Select, SelectOption, Text, type SelectProps } from 'src/components';

interface SelectCountryProps extends SelectProps {
  variableCountryAttribute?: string;
  upperCase?: boolean;
  showText?: boolean;
  showFlag?: boolean;
  handleOnSelect: Function;
}

const SelectCountry: FunctionComponent<SelectCountryProps> = (props) => {
  const { handleOnSelect: onSelect, variableCountryAttribute = 'language', upperCase = false, showText = true, showFlag = true } = props;
  const { t } = useTranslation(COUNTRIES_NAMESPACE);

  function handleOnSelect(value: CountryMapProps | undefined, option: any): void {
    if (typeof onSelect === 'function') {
      onSelect(value, option);
    }
  }

  const renderOptionValue = useCallback(
    (value: CountryMapProps | undefined): React.ReactNode => {
      if (value === null || value === undefined) return null;

      const { Flag } = value;
      const variable = value?.[variableCountryAttribute as keyof Country];

      let translated = variable;

      if (variableCountryAttribute === 'name') {
        translated = t(variable);
      }

      return (
        <>
          {showFlag && (
            <Flag width={20} className={styles.flag} />
          )}

          {showText && (
            <Text upperCase={upperCase}>
              {translated}
            </Text>
          )}
        </>
      );
    },
    [t, variableCountryAttribute, upperCase]
  );

  function formatOptions(): React.ReactNode[] {
    return Array.from(Countries, ([key, value]) => {
      const { name } = value;

      const translated = t(name);

      return (
        <SelectOption
          key={key}
          value={key}
          label={key}
          title={translated}
        >
          {renderOptionValue(value)}
        </SelectOption>
      );
    });
  }

  const memoizedOptions = useMemo(formatOptions, [renderOptionValue, t]);

  const defaultValue: Country | undefined = Countries.get(props.defaultValue);

  const formattedDefaultValue = defaultValue?.code;

  return (
    <Select
      key={defaultValue?.code}
      onSelect={handleOnSelect}
      defaultValue={formattedDefaultValue}
      dropdownMatchSelectWidth
    >
      {memoizedOptions}
    </Select>
  );
};

export default SelectCountry;
