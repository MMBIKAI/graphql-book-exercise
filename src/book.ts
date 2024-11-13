// src/Book.ts
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  author: string;
}
