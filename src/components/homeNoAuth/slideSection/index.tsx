import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { Container, Button } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = function ({ newestCourses }: props) {
  return (
    <>
      <Container>
        <p className={styles.sectionTitle}>AULAS DISPONÍVEIS</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button outline color="light" className={styles.SlideSectionBtn}>
            Cadastre-se para acessar
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;
