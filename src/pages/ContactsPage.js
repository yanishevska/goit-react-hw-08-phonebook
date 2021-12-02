import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import Container from "../components/Container";

export default function ContactsPage() {
   return (
        <>
            <Container>
                <h2 >Phonebook</h2>
                <ContactForm />
            </Container>
            <Container>
                <Filter />
                <h3>Contacts</h3>
                <ContactList />
            </Container>
        </>
    );
};