import { Layout, Row } from 'antd';
import SelectCountry from 'src/domains/countries/SelectCountry';
import styles from './header.module.css';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import { setDefaultOptions } from 'date-fns'
import { getDateFnsLocale } from 'src/helpers/locale';
import { removeHyphens } from 'src/helpers/string';



const Header = () => {
  function onSelectLanguage(value: string, option: any) {
    setLanguage(value);

    const locale = getDateFnsLocale(removeHyphens(value))

    setDefaultOptions({
      locale
    })
  }

  const { lang } = useTranslation();

  return (
    <Layout.Header>
      <Row justify="end" align="middle" className={styles.headerRow}>
        <SelectCountry
          onSelect={onSelectLanguage}
          defaultValue={lang}
          variableCountryAttribute="language"
          showFlag={false}
        />
      </Row>
    </Layout.Header>
  );
};

export default Header;
