import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import { Book } from "./book";
import { books } from "./data";

@InputType()
class BookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  books() {
    return books;
  }

  @Query(() => Book, { nullable: true })
  getBookById(@Arg("id") id: string): Book | undefined {
    return books.find((book) => book.id === id);
  }

  @Mutation(() => Book)
  addBook(@Arg("data") { title, author }: BookInput): Book {
    const newBook: Book = {
      id: (books.length + 1).toString(),
      title,
      author
    };
    books.push(newBook);
    return newBook;
  }
}