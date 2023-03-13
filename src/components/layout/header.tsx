import { Layout, Row } from 'antd';
import SelectCountry from 'src/domains/countries/SelectCountry';
import styles from './header.module.css';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

const Header = () => {
  function onSelectLanguage(value: any, option: any) {
    setLanguage(value);
  }

  const { lang } = useTranslation();

  return (
    <Layout.Header>
      <Row justify="end" align="middle" className={styles.headerRow}>
        <SelectCountry onSelect={onSelectLanguage} defaultValue={lang} variableCountryAttribute="language" showFlag={false} />
      </Row>
    </Layout.Header>
  );
};

export default Header;
