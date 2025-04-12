/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { getMe, updateProfile } from "@/services/Transactions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Phone,
  Edit,
  MapPin,
  Mail,
  UserCircle,
  Calendar,
  ShieldCheck,
  CheckCircle,
  Globe,
  Facebook,
  Home,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUser } from "@/types";

const ProfilePage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<IUser>>({
    name: "",
    phoneNumber: "",
    email: "",
    profilePicture: "",
    city: "",
    address: "",
    postalCode: "",
    country: "",
    gender: undefined,
    bio: "",
    facebook: "",
    website: "",
    twitter: "",
    linkedin: "",
    github: "",
    instagram: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getMe();
        setUser(data?.user);
        setFormData({
          name: data?.user?.name || "",
          phoneNumber: data?.user?.phoneNumber || "",
          email: data?.user?.email || "",
          profilePicture: data?.user?.profilePicture || "",
          city: data?.user?.city || "",
          address: data?.user?.address || "",
          postalCode: data?.user?.postalCode || "",
          country: data?.user?.country || "",
          gender: data?.user?.gender || undefined,
          bio: data?.user?.bio || "",
          facebook: data?.user?.facebook || "",
          website: data?.user?.website || "",
          twitter: data?.user?.twitter || "",
          linkedin: data?.user?.linkedin || "",
          github: data?.user?.github || "",
          instagram: data?.user?.instagram || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        toast.error("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof IUser, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await updateProfile(user?._id || "", formData);

      if (res.success) {
        toast.success("Profile updated successfully");
        const { data } = await getMe();
        setUser(data?.user);
      } else {
        toast.error(res.message || "Failed to update profile");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while updating the profile.");
    } finally {
      setIsModalOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <Card className="w-full  md:p-6">
          <CardHeader>
            <CardTitle>Loading Profile...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-24 w-24 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-[300px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Skeleton className="h-[200px] w-full rounded-xl" />
              <Skeleton className="h-[200px] w-full rounded-xl" />
            </div>
            <Skeleton className="h-[100px] w-full rounded-xl" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-[#FF5E01] to-[#FF8C01] w-full"></div>
            <div className="absolute -bottom-16 left-8">
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                <AvatarImage src={user?.profilePicture || user?.avatar} />
                <AvatarFallback className="bg-white text-[#FF5E01] text-4xl font-bold">
                  {user?.name?.charAt(0) || <User className="w-16 h-16" />}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute top-4 right-4">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-50 shadow-sm"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl overflow-y-auto max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                      Edit Profile
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name || ""}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email || ""}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            handleSelectChange("gender", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="profilePicture">
                          Profile Picture URL
                        </Label>
                        <Input
                          id="profilePicture"
                          name="profilePicture"
                          value={formData.profilePicture || ""}
                          onChange={handleInputChange}
                          placeholder="https://example.com/photo.jpg"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input
                          id="facebook"
                          name="facebook"
                          value={formData.facebook || ""}
                          onChange={handleInputChange}
                          placeholder="https://facebook.com/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          name="twitter"
                          value={formData.twitter || ""}
                          onChange={handleInputChange}
                          placeholder="https://twitter.com/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin || ""}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          name="github"
                          value={formData.github || ""}
                          onChange={handleInputChange}
                          placeholder="https://github.com/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input
                          id="instagram"
                          name="instagram"
                          value={formData.instagram || ""}
                          onChange={handleInputChange}
                          placeholder="https://instagram.com/username"
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website || ""}
                          onChange={handleInputChange}
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio || ""}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#FF5E01] hover:bg-[#D94F01] px-6"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="pt-20 px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Profile Info */}
              <div className="md:w-1/3 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {user?.name}
                  </h1>
                  {user?.bio && (
                    <p className="text-gray-600 mt-2 whitespace-pre-line">
                      {user.bio}
                    </p>
                  )}
                </div>

                {/* Personal Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <UserCircle className="w-5 h-5 text-[#FF5E01]" />
                    Personal Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-900">{user?.email}</p>
                      </div>
                    </div>
                    {user?.phoneNumber && (
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-gray-900">{user.phoneNumber}</p>
                        </div>
                      </div>
                    )}
                    {user?.gender && (
                      <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Gender</p>
                          <p className="capitalize text-gray-900">
                            {user.gender}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="capitalize text-gray-900">
                          {user?.role || "User"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="capitalize text-gray-900">
                          {user?.status || "Active"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                {(user?.website ||
                  user?.facebook ||
                  user?.twitter ||
                  user?.linkedin ||
                  user?.github ||
                  user?.instagram) && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-[#FF5E01]" />
                      Social Links
                    </h2>
                    <div className="space-y-3">
                      {user?.website && (
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.website.startsWith("http")
                                ? user.website
                                : `https://${user.website}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.website.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      {user?.facebook && (
                        <div className="flex items-center gap-3">
                          <Facebook className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.facebook.startsWith("http")
                                ? user.facebook
                                : `https://${user.facebook}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.facebook.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      {user?.twitter && (
                        <div className="flex items-center gap-3">
                          <Twitter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.twitter.startsWith("http")
                                ? user.twitter
                                : `https://${user.twitter}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.twitter.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      {user?.linkedin && (
                        <div className="flex items-center gap-3">
                          <Linkedin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.linkedin.startsWith("http")
                                ? user.linkedin
                                : `https://${user.linkedin}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.linkedin.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      {user?.github && (
                        <div className="flex items-center gap-3">
                          <Github className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.github.startsWith("http")
                                ? user.github
                                : `https://${user.github}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.github.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                      {user?.instagram && (
                        <div className="flex items-center gap-3">
                          <Instagram className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <a
                            href={
                              user.instagram.startsWith("http")
                                ? user.instagram
                                : `https://${user.instagram}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FF5E01] hover:underline text-sm"
                          >
                            {user.instagram.replace(/^https?:\/\//, "")}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Contact and Activity */}
              <div className="md:w-2/3 space-y-6">
                {/* Location Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#FF5E01]" />
                    Location Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(user?.city || user?.country) && (
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="text-gray-900">
                            {user.city}
                            {user.city && user.country && ", "}
                            {user.country}
                          </p>
                        </div>
                      </div>
                    )}
                    {user?.address && (
                      <div className="flex items-start gap-3">
                        <Home className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="text-gray-900">{user.address}</p>
                        </div>
                      </div>
                    )}
                    {user?.postalCode && (
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Postal Code</p>
                          <p className="text-gray-900">{user.postalCode}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Account Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#FF5E01]" />
                    Account Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Member Since</p>
                        <p className="text-gray-900">
                          {user?.createdAt
                            ? new Date(user.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Last Updated</p>
                        <p className="text-gray-900">
                          {user?.updatedAt
                            ? new Date(user.updatedAt).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
