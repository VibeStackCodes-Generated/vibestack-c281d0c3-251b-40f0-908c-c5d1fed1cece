import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  PenLine,
  MapPin,
  Tag,
  Image,
  Eye,
  ArrowLeft,
  Sparkles,
  X,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { usePostStore } from "@/hooks/usePostStore";
import type { BlogPost } from "@/data/posts";

const CATEGORY_OPTIONS = [
  "Europe",
  "Asia",
  "South America",
  "North America",
  "Africa",
  "Oceania",
  "Middle East",
];

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  category: z.string().min(1, "Please select a category"),
  location: z.string().min(2, "Please enter a location"),
  coverQuery: z
    .string()
    .min(3, "Describe the cover image in 3-5 words"),
  authorName: z.string().min(2, "Author name is required"),
});

type PostFormData = z.infer<typeof postSchema>;

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

export default function NewPost() {
  const navigate = useNavigate();
  const { addPost } = usePostStore();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [featured, setFeatured] = useState(false);
  const [activeTab, setActiveTab] = useState("write");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      location: "",
      coverQuery: "",
      authorName: "Elena Vasquez",
    },
  });

  const watchedValues = watch();

  const addTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed) && tags.length < 6) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const onSubmit = (data: PostFormData) => {
    const id = slugify(data.title);
    const coverQuery = data.coverQuery;

    const newPost: BlogPost = {
      id,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      coverImage: `https://img.vibestack.site/s/${encodeURIComponent(coverQuery)}/1600/900`,
      coverQuery,
      date: new Date().toISOString().split("T")[0],
      readTime: estimateReadTime(data.content),
      category: data.category,
      location: data.location,
      author: {
        name: data.authorName,
        avatar: `https://img.vibestack.site/s/${encodeURIComponent(data.authorName + " headshot studio lighting")}/200/200`,
        bio: "Travel writer and explorer.",
      },
      tags,
      featured,
    };

    addPost(newPost);
    toast.success("Post published! 🎉", {
      description: `"${data.title}" is now live on the blog.`,
    });
    navigate(`/post/${id}`);
  };

  const renderPreviewContent = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-xl font-bold mt-6 mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-4 mb-1 text-foreground/90 text-sm">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.trim() === "") return <div key={i} className="h-3" />;
      return (
        <p key={i} className="text-foreground/90 text-sm leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <PenLine className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Write a New Story
            </h1>
            <p className="text-sm text-muted-foreground">
              Share your travel adventures with the world
            </p>
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="write" className="gap-2">
              <PenLine className="w-4 h-4" />
              Write
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </TabsTrigger>
          </TabsList>

          {/* WRITE TAB */}
          <TabsContent value="write">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-sm font-medium mb-1.5 block">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="e.g. Chasing Sunsets in the Amalfi Coast"
                  className="text-lg"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-destructive text-xs mt-1">{errors.title.message}</p>
                )}
              </div>

              {/* Excerpt */}
              <div>
                <Label htmlFor="excerpt" className="text-sm font-medium mb-1.5 block">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="A short summary that appears on post cards (1-2 sentences)"
                  rows={2}
                  {...register("excerpt")}
                />
                {errors.excerpt && (
                  <p className="text-destructive text-xs mt-1">{errors.excerpt.message}</p>
                )}
              </div>

              {/* Category & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-1.5 block">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    Category / Region
                  </Label>
                  <Select
                    value={watchedValues.category}
                    onValueChange={(val) => setValue("category", val, { shouldValidate: true })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORY_OPTIONS.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-destructive text-xs mt-1">{errors.category.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g. Positano, Italy"
                    {...register("location")}
                  />
                  {errors.location && (
                    <p className="text-destructive text-xs mt-1">{errors.location.message}</p>
                  )}
                </div>
              </div>

              {/* Cover Image */}
              <Card className="border-dashed">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Image className="w-4 h-4 text-primary" />
                    Cover Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="coverQuery" className="text-xs text-muted-foreground mb-1.5 block">
                    Describe the image in 3-5 words (we'll find a matching photo)
                  </Label>
                  <Input
                    id="coverQuery"
                    placeholder="e.g. amalfi coast sunset cliffs"
                    {...register("coverQuery")}
                  />
                  {errors.coverQuery && (
                    <p className="text-destructive text-xs mt-1">{errors.coverQuery.message}</p>
                  )}
                  {watchedValues.coverQuery && watchedValues.coverQuery.length >= 3 && (
                    <div className="mt-3 rounded-lg overflow-hidden aspect-[16/9] bg-muted">
                      <img
                        src={`https://img.vibestack.site/s/${encodeURIComponent(watchedValues.coverQuery)}/800/450`}
                        alt="Cover preview"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Content */}
              <div>
                <Label htmlFor="content" className="text-sm font-medium mb-1.5 block">
                  Story Content
                </Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Use <code className="bg-muted px-1 py-0.5 rounded text-xs">## Heading</code> for
                  section headers and <code className="bg-muted px-1 py-0.5 rounded text-xs">- item</code> for
                  bullet points.
                </p>
                <Textarea
                  id="content"
                  placeholder="Write your travel story here..."
                  rows={16}
                  className="font-mono text-sm leading-relaxed"
                  {...register("content")}
                />
                {errors.content && (
                  <p className="text-destructive text-xs mt-1">{errors.content.message}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {watchedValues.content
                    ? `~${estimateReadTime(watchedValues.content)}`
                    : "0 min read"}
                </p>
              </div>

              {/* Tags */}
              <div>
                <Label className="text-sm font-medium mb-1.5 block">
                  <Tag className="w-3.5 h-3.5 inline mr-1" />
                  Tags (up to 6)
                </Label>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1 pr-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:bg-foreground/10 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                {tags.length < 6 && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a tag..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagKeyDown}
                      className="max-w-xs"
                    />
                    <Button type="button" variant="outline" size="icon" onClick={addTag}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Author & Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="authorName" className="text-sm font-medium mb-1.5 block">
                    Author Name
                  </Label>
                  <Input id="authorName" {...register("authorName")} />
                  {errors.authorName && (
                    <p className="text-destructive text-xs mt-1">{errors.authorName.message}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <Switch
                    checked={featured}
                    onCheckedChange={setFeatured}
                    id="featured"
                  />
                  <Label htmlFor="featured" className="text-sm cursor-pointer flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Featured post
                  </Label>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* PREVIEW TAB */}
          <TabsContent value="preview">
            <Card className="overflow-hidden">
              {watchedValues.coverQuery && watchedValues.coverQuery.length >= 3 && (
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src={`https://img.vibestack.site/s/${encodeURIComponent(watchedValues.coverQuery)}/1600/900`}
                    alt="Cover preview"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  {watchedValues.category && (
                    <Badge className="bg-primary text-primary-foreground">
                      {watchedValues.category}
                    </Badge>
                  )}
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1
                  className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {watchedValues.title || "Your Title Here"}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  {watchedValues.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {watchedValues.location}
                    </span>
                  )}
                  <span>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  {watchedValues.content && (
                    <span>{estimateReadTime(watchedValues.content)}</span>
                  )}
                </div>
                <Separator className="mb-6" />
                {watchedValues.excerpt && (
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    {watchedValues.excerpt}
                  </p>
                )}
                <div className="space-y-1">
                  {watchedValues.content
                    ? renderPreviewContent(watchedValues.content)
                    : (
                      <p className="text-muted-foreground italic">
                        Start writing to see a preview...
                      </p>
                    )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Submit */}
        <Separator className="my-8" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {isValid ? (
              <span className="text-accent flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Ready to publish
              </span>
            ) : (
              "Fill in all required fields to publish"
            )}
          </p>
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid} className="gap-2">
              <PenLine className="w-4 h-4" />
              Publish Story
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
