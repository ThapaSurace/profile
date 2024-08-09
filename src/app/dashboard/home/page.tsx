"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  img: z.string(),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  desc: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  tags: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  github_link: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  preview_link: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const AddProjectPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      img: undefined,
      title: "",
      desc: "",
      tags: "",
      github_link: "",
      preview_link: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    
    const formData = {
      img: values.img[0],
      title: values.title,
      desc: values.desc,
      tags: values.tags,
      github_link: values.github_link,
      preview_link: values.preview_link
    }
    console.log(formData);
  }
  return (
    <div className="container">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="img"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                    <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="project title.." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Textarea placeholder="project desc.." rows={6} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="tags.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<div className="flex gap-4">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="github_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github Link</FormLabel>
                    <FormControl>
                    <Input type="text" placeholder="github link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="preview_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preview Link</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="preview link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProjectPage;
