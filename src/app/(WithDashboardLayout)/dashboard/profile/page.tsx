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
        <Card className="w-full max-w-2xl p-6">
          <CardHeader>
            <CardTitle>Loading Profile...</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden shadow-lg">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-[#FF5E01] to-[#FF8C01] p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-white">
                <AvatarImage src={user?.profilePicture || user?.avatar} />
                <AvatarFallback className="bg-white text-[#FF5E01]">
                  {user?.name?.charAt(0) || <User className="w-12 h-12" />}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                  <Mail className="w-4 h-4" />
                  {user?.email}
                </p>
                {user?.phoneNumber && (
                  <p className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <Phone className="w-4 h-4" />
                    {user?.phoneNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <UserCircle className="w-5 h-5 text-[#FF5E01]" />
                  Basic Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="capitalize">{user?.role || "User"}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className="capitalize">{user?.status || "Active"}</p>
                    </div>
                  </div>
                  {user?.gender && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Gender</p>
                        <p className="capitalize">{user.gender}</p>
                      </div>
                    </div>
                  )}
                  {user?.bio && (
                    <div className="flex items-start gap-3">
                      <Edit className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Bio</p>
                        <p className="whitespace-pre-line">{user.bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#FF5E01]" />
                  Contact Information
                </h2>
                <div className="space-y-3">
                  {user?.address && (
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p>{user.address}</p>
                      </div>
                    </div>
                  )}
                  {(user?.city || user?.country) && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p>
                          {user.city}
                          {user.city && user.country && ", "}
                          {user.country}
                        </p>
                      </div>
                    </div>
                  )}
                  {user?.postalCode && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Postal Code</p>
                        <p>{user.postalCode}</p>
                      </div>
                    </div>
                  )}
                  {user?.facebook && (
                    <div className="flex items-start gap-3">
                      <Facebook className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Facebook</p>
                        <a
                          href={
                            user.facebook.startsWith("http")
                              ? user.facebook
                              : `https://${user.facebook}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF5E01] hover:underline"
                        >
                          {user.facebook}
                        </a>
                      </div>
                    </div>
                  )}
                  {user?.website && (
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <a
                          href={
                            user.website.startsWith("http")
                              ? user.website
                              : `https://${user.website}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF5E01] hover:underline"
                        >
                          {user.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#FF5E01]" />
                Account Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Member Since</p>
                    <p>
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p>
                      {user?.updatedAt
                        ? new Date(user.updatedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile Dialog */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="mt-8 bg-[#FF5E01] hover:bg-[#D94F01]">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Edit Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <div className="md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio || ""}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us about yourself..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="facebook">Facebook Profile</Label>
                      <Input
                        id="facebook"
                        name="facebook"
                        value={formData.facebook || ""}
                        onChange={handleInputChange}
                        placeholder="https://facebook.com/username"
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
                  <div className="flex justify-end gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#FF5E01] hover:bg-[#D94F01]"
                    >
                      Save Changes
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
