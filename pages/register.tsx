import HeaderGeneric from "@/src/components/common/headerGeneric";
import styles from "../styles/registerLogin.module.scss";
import Head from "next/head";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "@/src/components/common/footer";

const Register = function () {
  return (
    <>
      <Head>
        <title>Onebitflix - Registro</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <script src="https://jsuites.net/v4/jsuites.js"></script>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero fazer login!"
        />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem-vindo(a) ao OneBitFlix!</p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Faça sua conta!</strong>
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                Nome
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Qual o seu nome?"
                required
                maxLength={25}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName" className={styles.label}>
                Sobrenome
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Qual o seu sobrenome?"
                required
                maxLength={25}
                className={styles.inputName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone" className={styles.label}>
                WhatsApp/Telegram
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(99) 9 9999 9999"
                data-mask="[-]+55 (00) 0 0000 0000"
                required
                maxLength={25}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email" className={styles.label}>
                WhatsApp/Telegram
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite o seu e-mail"
                required
                maxLength={25}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="birth" className={styles.label}>
                Data de Nascimento
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                placeholder="dd/mm/aaaa"
                required
                min="1920-01-01"
                max="2024-12-31"
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                SENHA
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Digite a sua senha (Min: 6 | Max: 20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword" className={styles.label}>
                CONFIRME SUA SENHA
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirme a sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>
              Cadastrar
            </Button>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Register;
