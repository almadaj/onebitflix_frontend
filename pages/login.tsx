import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "@/src/components/common/headerGeneric";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/src/components/common/footer";

const Login = function () {
  return (
    <>
      <Head>
        <title>OneBitFlix - Login</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/register"
          btnContent="Quero fazer parte!"
        />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem-vindo(a) de volta!</p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Bem-vindo(a) ao OneBitFlix!</strong>
            </p>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Qual o seu e-mail?"
                required
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                Senha
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Qual a sua senha?"
                required
                className={styles.input}
              />
            </FormGroup>
            <Button outline className={styles.formBtn}>
              Entrar
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Login;
